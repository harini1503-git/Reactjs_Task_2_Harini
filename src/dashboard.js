import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import './dashboard.css';

Chart.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  // Sample data for charts
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],  // x-axis
    datasets: [
      {
        label: 'User Growth',
        data: [1200, 1500, 1800, 2000, 2500, 3000, 1254, 2653, 3762, 9832, 9837, 9236], // y-axis
        backgroundColor: '#36A2EB',
        borderColor: '#36A2EE',
      },
    ],
  };

  const barData = {
    labels: ['Post 1', 'Post 2', 'Post 3', 'Post 4','Post 5', 'Post 6', 'Post 7', 'Post 8', 'Post 9', 'Post 10'],
    datasets: [
      {
        label: 'Engagement (Likes, Shares, Comments)',
        data: [200, 150, 300, 250, 260, 350, 389, 250, 376, 526],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const pieData = {
    labels: ['18-24', '25-34', '35-44', '45+'],
    datasets: [
      {
        label: 'Audience Demographics',
        data: [30, 40, 20, 10, 46, 64],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  return (
    <div className="dashboard">
      <div className="chart-container">
        <h2>User Growth Over Time</h2>
        <Line data={lineData} />
      </div>
      <div className="chart-container">
        <h2>Engagement Metrics</h2>
        <Bar data={barData} />
      </div>
      <div className="chart-container">
        <h2>Audience Demographics</h2>
        <Pie data={pieData} />
      </div>

    </div>
  );
};

export default Dashboard;