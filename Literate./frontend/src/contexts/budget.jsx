import { createContext, useState, useEffect, useContext } from "react";
import apiClient from "../services/apiClient";
import { AuthorizeContext } from "./authUser";

const BudgetContext = createContext();

const BudgetProvider = ({ children }) => {
  const { authState, initialized } = useContext(AuthorizeContext);
  const [budgetInfo, setBudgetInfo] = useState({});

  useEffect(() => {
    const fetchBudget = async () => {
      if (authState.isAuthenticated && authState.user.currBudgetId) {
        const budgetData = await apiClient.getBudget(
          authState.user.currBudgetId
        );
        if (budgetData.data !== null) {
          setBudgetInfo({
            userId: authState.user?.id,
            name: budgetData.data.name,
            total: budgetData.data.total,
            budgetLeft: 0,
            budgetData: budgetData.data.budgetData,
            hasBudget: true,
          });
        } else {
          setBudgetInfo({
            userId: authState.user?.id,
            name: "",
            total: 0,
            budgetLeft: 0,
            budgetData: {},
            hasBudget: false,
          });
        }
      }
    };
    fetchBudget();
  }, [authState.isAuthenticated, budgetInfo.hasBudget]);

  const passedProps = { budgetInfo, setBudgetInfo };

  return (
    <BudgetContext.Provider value={passedProps}>
      {children}
    </BudgetContext.Provider>
  );
};

export { BudgetContext, BudgetProvider };