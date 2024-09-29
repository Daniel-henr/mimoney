import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

const Balance = () => {
  return (
    <article className="flex max-w-60 max-h-28 rounded-xl py-2 px-4 bg-essencial-200">
      <div className="flex-grow">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faWallet} className="w-5 h-6" style={{ color: "#2a2b3d" }} />
          <h1 className="font-medium text-xl ml-1">Seu Saldo</h1>
        </div>
        <h2 className="text-3xl font-bold text-primary-950 mt-5">
          R$<span className="ml-1">0,00</span>
        </h2>
      </div>
      <div className="flex items-center ml-9 mb-6">
        <h3 className="text-xs bg-support-300 text-primary-950 py-0.5 px-1.5 rounded-xl font-bold">0,00%</h3>
      </div>
    </article>
  );
};

export default Balance;
