import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const CreditScoreTracker = () => {
  // Dummy data for credit score over time
  const creditScoreData = [
    { month: 'Jan', score: 720 },
    { month: 'Feb', score: 740 },
    { month: 'Mar', score: 730 },
    { month: 'Apr', score: 750 },
    { month: 'May', score: 770 },
    { month: 'Jun', score: 760 },
    { month: 'Jul', score: 780 },
    { month: 'Aug', score: 790 },
    { month: 'Sep', score: 800 },
  ];

  return (
    <div className="credit-score-chart p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">CIBIL Score Tracker</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={creditScoreData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[700, 850]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="score" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-center mt-4">Your CIBIL score has improved over the last few months!</p>
    </div>
  );
};

export default CreditScoreTracker;
