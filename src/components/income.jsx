import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';

const Income = () => {
  return (
    <section className="transition-colors duration-500 bg-essencial-50 border-essencial-200 border-custom-1 flex max-w-60 max-h-28 rounded-xl py-2 px-4 dark:bg-support-950 dark:border-support-600">
      {/* Header com Ícone e Título */}
      <div className="flex-grow">
        <header className="flex items-center">
          <FontAwesomeIcon icon={faArrowTrendUp} className="w-5 h-6 text-primary-950 dark:text-essencial-200" />
          <h1 className="text-xl text-primary-950 font-medium ml-1 dark:text-essencial-200">Receita Mensal</h1>
        </header>

        {/* Valor da Receita */}
        <p className="font-bold text-3xl text-primary-950 mt-5 dark:text-essencial-200">
          +R$<span className="text-secondary-600 ml-1">0,00</span>
        </p>
      </div>
    </section>
  );
};

export default Income;
