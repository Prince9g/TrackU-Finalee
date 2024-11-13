// Dashboard.js
import React, { useState, useEffect } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";

// Register necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const Dashboard = () => {
  const [dynamicData, setDynamicData] = useState([1200, 1900, 300, 500, 2000]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDynamicData(dynamicData.map((d) => d + Math.floor(Math.random() * 200 - 100)));
    }, 5000);
    return () => clearInterval(interval);
  }, [dynamicData]);

  const barData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Expenditure",
        data: dynamicData,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const pieData = {
    labels: ["Clothing", "Food", "Entertainment"],
    datasets: [
      {
        data: [300, 150, 200],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const lineData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Future Expenditures",
        data: [800, 600, 700, 900, 1200],
        fill: false,
        borderColor: "#742774",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Amount: $${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="flex flex-col h-full">
      <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>
      <div className="flex flex-col flex-1">
        <div className="flex-grow mb-8">
          <Bar data={barData} options={options} />
        </div>
        <div className="flex flex-1">
          <div className="w-1/2 h-64 mr-4">
            <Pie data={pieData} />
          </div>
          <div className="w-1/2 h-64">
            <Line data={lineData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
