import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters" })
    .max(50),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(1)
    .max(1000),
  category: z.enum(["Entertainment", "Groceries", "Utilities"], {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

const ExpenseForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(schema),
  });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="m-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          className="form-control"
          id="description"
        />
        {formState.errors.description && (
          <p className="text-danger">{formState.errors.description.message}</p>
        )}
      </div>
      <div className="m-3">
        <label htmlFor="amount" className="label-form">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          type="number"
          className="form-control"
          id="amount"
        />
        {formState.errors.amount && (
          <p className="text-danger">{formState.errors.amount.message}</p>
        )}
      </div>
      <div className="m-3">
        <label htmlFor="category">Category</label>
        <select className="form-select" {...register("category")}>
          <option value=""></option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        {formState.errors.category && (
          <p className="text-danger">{formState.errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
