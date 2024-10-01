import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import CircularProgress from './circularProgress';

const Savings = () => {
  return (
    <section className="max-w-64 min-h-custom-27 bg-essencial-50 border-essencial-200 border-custom-1 rounded-xl py-2 px-4 dark:bg-support-950 dark:border-support-600">
      {/* Header com Ícone e Título */}
      <header className="flex items-center">
        <FontAwesomeIcon icon={faPiggyBank} className="w-6 h-6 text-primary-950 dark:text-support-200" />
        <h1 className="text-xl text-primary-950 font-medium ml-1 dark:text-support-200">Cofrinho</h1>
      </header>

      {/* Conteúdo Principal */}
      <div>
        {/* Meta de Economia */}
        <h2 className="text-2xl text-primary-950 font-medium mt-6 ml-3 dark:text-essencial-200">Monitor Novo</h2>

        {/* Barra de Progresso */}
        <div className="flex justify-center mt-12">
          <CircularProgress />
        </div>

        {/* Valor Total */}
        <div className="flex justify-center">
          <p className="font-semibold text-xl text-primary-950 mt-9 dark:text-essencial-200 ">
            Valor Total: <span>R$800,00</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Savings;
