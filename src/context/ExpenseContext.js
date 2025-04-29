import React, { createContext, useState, useEffect } from "react";
import '../styles.css'; 

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [currency, setCurrency] = useState("INR");

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    const storedCurrency = localStorage.getItem("currency") || "INR";
    setExpenses(storedExpenses);
    setCurrency(storedCurrency);
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("currency", currency);
  }, [expenses, currency]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const setAppCurrency = (newCurrency) => {
    setCurrency(newCurrency);
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        addExpense,
        deleteExpense,
        currency,
        setAppCurrency,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
