import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const data = {
  labels: ['Dec 6, 2021', '', '', '', '3/10/2022'],
  datasets: [
    {
      label: 'Dataset',
      data: [-200, 0, 100, 300, 440], // Use your actual data points here
      fill: true,
      backgroundColor: 'rgba(29, 78, 216, 0.2)', // Tailwind CSS blue-800 with opacity
      borderColor: 'rgba(29, 78, 216)', // Tailwind CSS blue-800
      pointBorderColor: 'rgba(29, 78, 216)',
      pointBackgroundColor: '#fff',
      tension: 0.1,
    },
  ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
          color: 'rgba(255, 255, 255, 0.1)', // Light grid lines
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hides the legend
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function(context) {
            // Assuming 'context' holds all data for the current item
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += `$${context.parsed.y.toFixed(2)}`;
            }
            return label;
          },
          afterLabel: function(context) {
            // You can add additional text after the label here
            const dateLabel = context.label;
            return dateLabel;
          }
        }
      },
    },
    responsive: true, // Make it responsive
  maintainAspectRatio: false,
  };
  

const ChartComponent = () => {
  return (
    <div className=" p-4 rounded-xl shadow-md w-full h-64">
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;