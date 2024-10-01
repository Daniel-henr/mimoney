import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const Graph = () => {
  const data = {
    labels: ['Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'],
    datasets: [
      {
        label: 'Cash Flow',
        data: [50, 150, 100, 200, 250, 300],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.3)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.4,  // Para deixar as curvas mais suaves
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 400,
      },
    },
  };

  return (
    <div className=" p-5 max-w-lg mx-auto">
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
