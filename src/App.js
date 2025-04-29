import React, { useState } from "react";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Filters from "./components/Filters";
import Summary from "./components/Summary";
import { ExpenseProvider } from "./context/ExpenseContext";
import CurrencySelector from "./components/CurrencySelector";
import './styles.css'; 

const App = () => {
  const [ filter, setFilter] = useState("ALL");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <ExpenseProvider>
      <div>
        <CurrencySelector />
        <AddExpenseForm />
        <Filters onFilterChange={handleFilterChange} />
        <ExpenseList />
        <Summary />
      </div>
    </ExpenseProvider>
  );
};

export default App;
