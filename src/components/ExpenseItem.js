import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import ExpenseItem from "./ExpenseItem";
import '../styles.css';

const ExpenseList = () => {
  const { expenses } = useContext(ExpenseContext);

  return (
    <div className="expense-list">
      <h3>Expense List</h3>
      <table className="expense-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>Date</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
