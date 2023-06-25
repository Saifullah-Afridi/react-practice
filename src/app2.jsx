import React from "react";
import ExpenseList from "./Expense-tracker/components/ExpenseList";
import ExpenseFilter from "./Expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./Expense-tracker/components/ExpenseForm";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "aaa",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 2,
      description: "bbbb",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 3,
      description: "cccc",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 4,
      description: "ddd",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 5,
      description: "eee",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 6,
      description: "eee",
      amount: 10,
      category: "Entertainment",
    },
  ]);
  const [selectCategory, setSelectCategory] = useState("");
  const handleDelete = (id) => setExpenses(expenses.filter((e) => e.id !== id));
  const filterdCategory = selectCategory
    ? expenses.filter((e) => e.category === selectCategory)
    : expenses;
  const handleSubmit = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }]);
  };
  return (
    <>
      <div className="m-3">
        <ExpenseForm onSubmit={handleSubmit} />
      </div>

      <div className="m-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectCategory(category)}
        />
      </div>
      <div className="m-3">
        <ExpenseList expenses={filterdCategory} onDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
