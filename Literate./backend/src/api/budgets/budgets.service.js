const { validateFields } = require("../../utils/validate");
const userService = require("../users/users.service");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
//creates new budget for given user
const createBudget = async function (data) {
  console.log(data);
  const { userId, name, total, budgetData } = data;

  // We need more validation later
  // const requiredCreds = ["userId", "total", "subCategories"];
  // validateFields({
  //   required: requiredCreds,
  //   obj: { userId, total, subCategories },
  //   location: "Backend: Create Budget",
  // });

  // // Should validate for each category
  // // Normalize in database as wella
  // const subCategoryData = [];
  // for (let subCategory of subCategories) {
  //   subCategoryData.push({
  //     name: subCategory.name,
  //     category: subCategory.category,
  //     allocation: subCategory.allocation,
  //     totalSpent: subCategory.totalSpent,
  //   });
  // }
  const subCategories = [];
  for (let catName in budgetData) {
    for (let subCatObj of budgetData[catName]) {
      subCatObj["category"] = catName;
      subCatObj["totalSpent"] = 0;
      subCatObj.allocation = parseInt(subCatObj.allocation);
      subCategories.push(subCatObj);
    }
  }

  const budget = await prisma.budget.create({
    data: {
      name: name,
      total: parseInt(total),
      subCategories: {
        create: subCategories,
      },
      user: {
        connect: {
          id: userId,
        },
      },
    },
    include: {
      subCategories: true,
    },
  });
  const { isSuccess } = await userService.updateUser(userId, {
    currBudgetId: budget.id,
  });
  console.log(isSuccess);
  return { budget };
};

const getBudget = async (id) => {
  const budgetData = await prisma.budget.findUnique({
    where: { id: id },
    include: {
      subCategory: true,
    },
  });

  let budgetArray = [];
  const fields = ["name", "allocation", "totalSpent"];
  for (let x of budgetData.subCategory) {
    const foundObject = budgetArray.find((obj) =>
      Object.keys(obj).includes(x.category)
    );
    const obj = {};
    for (let y of fields) {
      obj[y] = x[y];
    }
    if (!foundObject) {
      console.log(obj);
      budgetArray.push({
        [x.category]: [obj],
      });
    } else foundObject[x.category].push(obj);
  }

  const budget = {
    name: budgetData.name,
    total: budgetData.total,
    budgetData: budgetArray,
  };

  return budget;
};
const updateBudget = async (id, { budgetData }) => {
  // Should the id be the userId or the budgetId, for now I think budgetId works best
  const { subCategories } = budgetData;
  // Data validation
  const deleteBudgetCat = await prisma.budget.update({
    where: { id: id },
    data: { subCategory: { deleteMany: {} } },
  });
  const updatedBudget = await prisma.budget.update({
    where: { id: id },
    data: {
      subCategory: {
        create: subCategories,
      },
    },
    include: {
      subCategory: true,
    },
  });
  return { updatedBudget };
};
module.exports = {
  createBudget,
  getBudget,
  updateBudget,
};
