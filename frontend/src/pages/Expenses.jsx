// Expenses.js
import React from "react";

// Example data for personal expenses
const expensesData = [
  { id: 1, amount: 5000, time: "2024-09-01", category: "Clothing", paymentMethod: "Google Pay" },
  { id: 2, amount: 4500, time: "2024-09-21", category: "Personal", paymentMethod: "Amazon Pay" },
  { id: 3, amount: 7000, time: "2024-09-03", category: "Car Booking", paymentMethod: "PhonePe" },
  { id: 4, amount: 6000, time: "2024-09-04", category: "Museum", paymentMethod: "BHIM UPI" },
  { id: 5, amount: 5500, time: "2024-09-05", category: "Clothing", paymentMethod: "BharatPe" },
];

// Calculate total and category-wise spending
const totalAmount = expensesData.reduce((total, expense) => total + expense.amount, 0);
const categoryTotals = expensesData.reduce((acc, expense) => {
  acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
  return acc;
}, {});

const Expenses = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">My Expenses</h1>
      <p className="mb-6">Here, you can view and manage your past expenses categorized by type.</p>
      <div className="mb-6">
        <p className="text-xl font-semibold">Total Money Spent: ₹{totalAmount}</p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Expenditure by Category</h2>
        <div className="bg-white border border-gray-300 p-4 rounded-lg shadow-sm">
          {Object.entries(categoryTotals).map(([category, amount]) => (
            <div key={category} className="flex justify-between mb-2">
              <span className="font-medium">{category}:</span>
              <span>₹{amount}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4">Expense Details</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="w-full bg-gray-100 text-left text-gray-600 border-b">
              <th className="p-3">Amount</th>
              <th className="p-3">Date</th>
              <th className="p-3">Category</th>
              <th className="p-3">Payment Method</th>
              <th className="p-3">Description</th>
            </tr>
          </thead>
          <tbody>
            {expensesData.map((expense) => (
              <tr key={expense.id} className="hover:bg-gray-50">
                <td className="p-3">₹{expense.amount}</td>
                <td className="p-3">{expense.time}</td>
                <td className="p-3">{expense.category}</td>
                <td className="p-3">{expense.paymentMethod}</td>
                <td className="p-3">Description for {expense.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Expenses;
