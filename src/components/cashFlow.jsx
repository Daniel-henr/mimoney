import React from 'react';
import Graph from './graph'; // Importação do componente de gráfico
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';

// Componente CashFlow
const CashFlow = () => {
  return (
    <div className='mt-4 py-2 px-4 max-w-custom-31 min-h-52 bg-essencial-50 border-custom-1 border-essencial-200 rounded-xl'>
      {/* Cabeçalho do gráfico */}
      <header className='flex items-center'>
        <FontAwesomeIcon icon={faChartColumn} className='text-primary-950 w-5 h-5' />
        <h2 className='ml-1 text-primary-950 font-medium text-md'>Cash Flow</h2>
      </header>
      {/* Componente do gráfico */}
      <Graph />
    </div>
  );
}

export default CashFlow;
