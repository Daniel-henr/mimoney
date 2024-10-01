import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartsJS, ArcElement, Tooltip, Legend, plugins  } from 'chart.js'
import { callback } from 'chart.js/helpers'

ChartsJS.register(ArcElement, Tooltip, Legend)

const ChartPie = () => {
    const data = {
        labels: ['Skin Valorant', 'Lanches', 'Tv Box', 'Cabelo'],
        datasets: [
            {
                label: 'Despesa Mensal',
                data: [64, 50, 21.45, 20],
                backgroundColor: [
                    'rgba(20, 133, 186, 1)',
                    'rgba(229, 138, 10, 1)',
                    'rgba(65, 15, 177, 1)',
                    'rgba(221, 63, 93, 1)',
                  ],
                  borderWidth: 1,
            },
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                
            },
            Tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                         return `${tooltipItem.label}: R$ ${tooltipItem.raw}`
                    },
                },
            },
        },
    }

  return (
    <div className="mt-4 max-w-xs mx-auto">
      <Pie data={data} options={options} />
    </div>
  )
}

export default ChartPie
