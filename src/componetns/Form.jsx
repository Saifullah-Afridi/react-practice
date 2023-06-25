import React from "react";

const Form = ({ catchData }) => {
  const handleSubmission = (e) => {
    e.preventDefault();
    catchData(formData);
  };
  return (
    <form
      className="p-4  border border-1 m-2 shadow-lg"
      onSubmit={handleSubmission}
    >
      <div className="mb-3">
        <label htmlFor="Description" className="form-label">
          Description
        </label>
        <input id="Description" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input id="amount" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <input id="category" type="text" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
};

export default Form;
