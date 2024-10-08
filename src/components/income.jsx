import { useTransactions } from '../hooks/transactionsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { animated } from '@react-spring/web';
import { useAnimatedValue } from '../hooks/animatedvalue';
import { truncateValue } from '../hooks/currencyUtils';

const Income = () => {
  const {totalIncome} = useTransactions()
  const springProps = useAnimatedValue(totalIncome)

  return (
    <section className="transition-colors duration-500 bg-essencial-50 border-essencial-200 border-custom-1 flex max-w-custom-17 max-h-28 rounded-xl py-2 px-2 dark:bg-support-950 dark:border-support-600">
      {/* Header com Ícone e Título */}
      <div className="flex-grow">
        <header className="flex items-center ml-2">
          <FontAwesomeIcon icon={faArrowTrendUp} className="w-5 h-6 text-primary-950 dark:text-essencial-200" />
          <h1 className="text-xl text-primary-950 font-medium ml-1 dark:text-essencial-200">Receita Mensal</h1>
        </header>

        {/* Valor da Receita */}
        <p className="font-bold text-3xl text-primary-950 mt-5 dark:text-essencial-200">
        <span className="text-primary-950 dark:text-essencial-200">+R$</span>{' '}
        <animated.span className="text-secondary-600">
          {springProps.val.to((val) => truncateValue(val, 11))}
        </animated.span>
        </p>
      </div>
    </section>
  );
};

export default Income;
