import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

const Balance = () => {
  return (
    <section className="flex max-w-60 max-h-28 rounded-xl py-2 px-4 bg-essencial-200">
      {/* Ícone e Título */}
      <div className="flex-grow">
        <header className="flex items-center">
          <FontAwesomeIcon icon={faWallet} className="w-5 h-6 text-primary-950" />
          <h1 className="font-medium text-xl ml-1">Seu Saldo</h1>
        </header>

        {/* Valor do Saldo */}
        <p className="text-3xl font-bold text-primary-950 mt-5">
          R$<span className="ml-1">0,00</span>
        </p>
      </div>

      {/* Percentual */}
      <div className="flex items-center ml-9 mb-6">
        <span className="text-xs bg-support-300 text-primary-950 py-0.5 px-1.5 rounded-xl font-bold">
          0,00%
        </span>
      </div>
    </section>
  );
};

export default Balance;
