import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import '../styles.css';

const ExpenseItem = ({ expense }) => {
  const { deleteExpense } = useContext(ExpenseContext);

  return (
    <div>
      <span>{expense.description}</span>
      <span>{expense.amount} {expense.currency}</span>
      <span>{expense.date}</span>
      <span>{expense.category}</span>
      <button onClick={() => deleteExpense(expense.id)}>Delete</button>
    </div>
  );
};

export default ExpenseItem;
