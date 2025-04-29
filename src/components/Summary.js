import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import '../styles.css'; 

const Summary = () => {
  const { expenses } = useContext(ExpenseContext);
  
  const total = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);

  return (
    <div>
      <h2>Summary</h2>
      <div>Total Expenses: ₹{total}</div>
    </div>
  );
};

export default Summary;
