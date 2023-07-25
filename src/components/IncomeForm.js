import React, { useState } from "react";

const IncomeForm = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., add the income transaction to the list)
    console.log("Income form submitted:", amount, description);

    // Clear form fields
    setAmount("");
    setDescription("");
  };

  return (
    <div className="form-container">
      <h2>Income Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input type="number" value={amount} onChange={handleAmountChange} />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
          />
        </label>
        <button type="submit">Add Income</button>
      </form>
    </div>
  );
};

export default IncomeForm;
