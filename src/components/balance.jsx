import { useTransactions } from '../hooks/transactionsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

const Balance = () => {
  const {totalBalance} = useTransactions()

  return (
    <section className="transition-colors duration-500 flex max-w-60 max-h-28 rounded-xl py-2 px-4 bg-essencial-200 dark:bg-support-600">
     
      {/* Ícone e Título */}
      <div className="flex-grow">
        <header className="flex items-center">
          <FontAwesomeIcon icon={faWallet} className="w-5 h-6 text-primary-950 dark:text-essencial-200" />
          <h1 className="font-medium text-xl ml-1 text-primary-950 dark:text-essencial-200">Seu Saldo</h1>
        </header>

        {/* Valor do Saldo */}
        <p className="text-3xl font-bold text-primary-950 mt-5 dark:text-essencial-200">
          R$<span className="ml-1">{totalBalance.toFixed(2)}</span>
        </p>
      </div>

      {/* Percentual */}
      <div className="flex items-center ml-9 mb-6">
        <span className="text-xs bg-support-300 text-primary-950 py-0.5 px-1.5 rounded-xl font-bold dark:bg-support-300">
          0,00%
        </span>
      </div>
    </section>
  );
};

export default Balance;
