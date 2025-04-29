import React from "react";
import '../styles.css'; 

const Filters = ({ onFilterChange }) => {
  return (
    <div className="filter-bar">
      <button onClick={() => onFilterChange("ALL")}>All</button>
      <button onClick={() => onFilterChange("MONTH")}>This Month</button>
      <button onClick={() => onFilterChange("YEAR")}>This Year</button>
      <button onClick={() => onFilterChange("DATE")}>Specific Date</button>
    </div>
  );
};

export default Filters;
