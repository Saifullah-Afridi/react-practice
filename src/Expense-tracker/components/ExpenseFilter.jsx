import React from "react";

const ExpenseFilter = ({ onSelectCategory }) => {
  return (
    <select className="form-select">
      onChange={(e) => onSelectCategory(e.target.value)}
      <option value="">All Category</option>
      <option value="Groceries">Groceries</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
};

export default ExpenseFilter;
