import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(...registerables);

const MyBarChart = ({ title, data }) => {
  const chartData = {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        data: data, // Use the data prop directly
        backgroundColor: [
          '#f87171', // Color for Sunday
          '#facc15', // Color for Monday
          '#ef4444', // Color for Tuesday
          '#22c55e', // Color for Wednesday
          '#f97316', // Color for Thursday
          '#0ea5e9', // Color for Friday
          '#a855f7', // Color for Saturday
        ],
      },
    ],
  };

  const options = {
    indexAxis: 'y', // Horizontal bar chart
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines
        },
        ticks: {
          color: 'white', // X axis ticks color
        },
      },
      y: {
        grid: {
          display: false, // Hide grid lines
        },
        ticks: {
          color: 'white', // Y axis ticks color
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      title: {
        display: true,
        text: title, // Use the title prop directly
        color: 'white', // Title color
        align: 'start', // Title align to the start
        font: {
          size: 18, // Title font size
        },
      },
    },
    responsive: true, // Make it responsive
    maintainAspectRatio: false, // Maintain the aspect ratio
  };
  return (
    <div > {/* Customize width, height and background color */}
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default MyBarChart;
