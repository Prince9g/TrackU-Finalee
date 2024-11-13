// FutureExpenses.js
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from "chart.js";

// Registering necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const FutureExpenses = () => {
  const [futureExpenses, setFutureExpenses] = useState([
    { id: 1, amount: 2000, date: "2024-10-01", category: "Rent" },
    { id: 2, amount: 1500, date: "2024-10-05", category: "Utilities" },
    { id: 3, amount: 500, date: "2024-10-10", category: "Internet" },
    { id: 4, amount: 1000, date: "2024-10-15", category: "Travel" },
  ]);

  // Total future expenses
  const totalFutureExpenses = futureExpenses.reduce((total, expense) => total + expense.amount, 0);

  // Data for future expense trends (example data)
  const lineData = {
    labels: futureExpenses.map(exp => exp.date),
    datasets: [
      {
        label: "Future Expenses",
        data: futureExpenses.map(exp => exp.amount),
        fill: false,
        borderColor: "#742774",
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Amount: ₹${tooltipItem.raw}`; // Custom label for tooltip
          },
        },
      },
    },
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Future Expenses</h1>
      <p className="mb-6">Here, you can view and plan for your upcoming expenses.</p>
      <div className="mb-6">
        <p className="text-xl font-semibold">Total Future Expenses: ₹{totalFutureExpenses}</p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Expenses</h2>
        <div className="bg-white border border-gray-300 p-4 rounded-lg shadow-sm">
          {futureExpenses.map((expense) => (
            <div key={expense.id} className="flex justify-between mb-2">
              <span className="font-medium">{expense.category}:</span>
              <span>₹{expense.amount} on {expense.date}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="h-64">
        <h2 className="text-2xl font-semibold mb-4">Future Expense Trends</h2>
        <Line data={lineData} options={options} /> {/* Line chart */} 
      </div>
    </div>
  );
};

export default FutureExpenses;
