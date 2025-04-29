import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import '../styles.css'; 

const CurrencySelector = () => {
  const { setAppCurrency } = useContext(ExpenseContext);

  return (
    <select onChange={(e) => setAppCurrency(e.target.value)}>
      {/* <option value="INR">INR (₹)</option>
      <option value="USD">USD ($)</option>
      <option value="EUR">EUR (€)</option>
      <option value="GBP">GBP (£)</option> */}
    </select>
  );
};

export default CurrencySelector;
