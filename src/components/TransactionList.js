import React from "react";

const TransactionList = ({ type }) => {
  // Replace this data with actual income and expense transactions (if using state management)
  const transactions = [
    { id: 1, type: "income", amount: 1000, description: "Salary" },
    { id: 2, type: "expense", amount: 500, description: "Rent" },
    { id: 3, type: "income", amount: 200, description: "Bonus" },
  ];

  const filteredTransactions = transactions.filter(
    (transaction) => transaction.type === type
  );

  return (
    <div className="transaction-list">
      <h2>{type === "income" ? "Income" : "Expenses"} List</h2>
      <ul>
        {filteredTransactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description} - {transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
