const express = require("express");
const router = express.Router();
const security = require("../../middlewares/security");
const userService = require("./users.service");

router.post("/login", async function (req, res, next) {
  try {
    const { publicUser, userToken } = await userService.loginUser(req.body);
    return res.status(200).json({ publicUser, userToken });
  } catch (err) {
    next(err);
  }
});

router.post("/register", async function (req, res, next) {
  try {
    const { publicUser, userToken } = await userService.registerUser(req.body);
    return res.status(201).json({ publicUser, userToken });
  } catch (err) {
    next(err);
  }
});

router.get("/me", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { user } = res.locals;
    if (user) {
      console.log("Retrieved User: ", user);
      res.status(200).json({ user: user });
    } else {
      console.log("No User Found", res.locals);
      next();
    }
  } catch (err) {
    console.log("Unexpected Error: ", err);
    next(err);
  }
});

router.put("/user/:id", async function (req, res, next) {
  try {
    const { isSuccess } = await userService.updateUser(req.params.id, req.body);
    return res.status(201).json({ isSuccess });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
