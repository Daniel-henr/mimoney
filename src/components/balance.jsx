import { useTransactions } from '../hooks/transactionsContext';
import { animated } from '@react-spring/web';
import { useAnimatedValue } from '../hooks/animatedvalue';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { truncateValue } from '../hooks/currencyUtils';

const Balance = () => {
  const { totalBalance } = useTransactions()
  const springProps = useAnimatedValue(totalBalance)

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
          <span className="text-primary-950 dark:text-essencial-200">R$</span>{' '}
          <animated.span>
            {springProps.val.to((val) => truncateValue(val, 11))}
          </animated.span>
        </p>
      </div>
    </section>
  );
};

export default Balance;
