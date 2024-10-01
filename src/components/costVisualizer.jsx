import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import ChartPie from './chartPie';

const CostVisualizer = () => {
  return (
    <div className=' py-2 px-4 mt-4 w-60 max-h-80 bg-essencial-50 border-custom-1 rounded-xl border-essencial-200 dark:bg-support-950 dark:border-support-600'>
      <div className='flex items-center'>
      <FontAwesomeIcon icon={faChartPie} className='text-primary-950 w-5 h-5 dark:text-essencial-200' />
            <h2 className='ml-1 text-primary-950 text-xl font-medium dark:text-essencial-200'>Despesa Gráfica</h2>
      </div>
        <ChartPie />
    </div>
  )
}

export default CostVisualizer
