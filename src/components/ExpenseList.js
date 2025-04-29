import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import ExpenseItem from "./ExpenseItem";
import '../styles.css';

const ExpenseList = () => {
  const { expenses } = useContext(ExpenseContext);

  return (
    <div>
      <h2>Expense List</h2>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

export default ExpenseList;
