import { useState } from 'react';
import { useTransactions } from '../hooks/transactionsContext';
import FlowToggle from './flowToggle';
import PropTypes from 'prop-types';

// Função para formatar o valor no formato BR (R$)
const formatCurrency = (value) => {
  const onlyNumbers = value.replace(/\D/g, ''); // Remove tudo que não for número
  const formattedValue = (Number(onlyNumbers) / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  
  return formattedValue.replace('R$', ''); // Remove o símbolo de R$ para exibir só o número formatado
};

const DescriptionForm = () => {
  const { addTransaction } = useTransactions();
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setisExpense] = useState(false);

  const handleValueChange = (e) => {
    const inputValue = e.target.value;
    setValue(formatCurrency(inputValue));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !value) {
      alert('Preencha todos os campos!');
      return;
    }

    const numericValue = parseFloat(value.replace(/\./g, '').replace(',', '.')); // Remove a formatação BR e converte para número
    const transaction = {
      description,
      value: numericValue,
      type: isExpense ? 'Saída' : 'Entrada',
    };

    console.log('Descrição:', transaction.description);
    console.log('Valor:', transaction.value);
    console.log('Tipo:', transaction.type);

    addTransaction(transaction);

    setDescription('');
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="transition-colors duration-500 mt-4 px-5 py-6 bg-essencial-50 border-custom-1 border-essencial-200 rounded-xl max-w-custom-47 max-h-24 flex items-center dark:bg-support-950 dark:border-support-600">
      <div className="flex">
        {/* Seção de Descrição */}
        <div>
          <h2 className="font-bold pb-1 text-sm text-primary-950 dark:text-essencial-200">Descrição</h2>
          <label htmlFor="description" className="border-essencial-200">
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="h-7 w-64 bg-support-100 border-support-200 border-custom-1 rounded-md placeholder:font-semibold pl-1 text-sm focus:outline-none text-primary-950 font-semibold dark:bg-sup-darkMode-300 dark:border-sup-darkMode-200 dark:text-primary-950 dark:placeholder:text-primary-800"
              placeholder="Escreva uma descrição"
            />
          </label>
        </div>

        {/* Seção de Valor */}
        <div className="ml-5">
          <h2 className="pb-1 font-bold text-sm text-primary-950 dark:text-essencial-200">Valor</h2>
          <label className="border-essencial-200">
            <input
              type="text"
              id="value"
              value={value}
              onChange={handleValueChange}
              className="h-7 w-28 bg-support-100 border-support-200 border-custom-1 rounded-md placeholder:font-semibold pl-1 focus:outline-none font-semibold text-primary-950 dark:bg-sup-darkMode-300 dark:border-sup-darkMode-200 dark:text-primary-950 dark:placeholder:text-primary-800"
              placeholder="0,00"
            />
          </label>
        </div>
      </div>

      {/* Seção de Entrada/Saída */}
      <FlowToggle isExpense={isExpense} setisExpense={setisExpense} />

      {/* Botão Adicionar */}
      <section>
        <button type="submit" className="ml-7 w-24 h-7 flex items-center justify-center rounded-md bg-secondary-400">
          <h2 className="text-essencial-50 text-sm tracking-wide font-semibold dark:text-support-950">Adicionar</h2>
        </button>
      </section>
    </form>
  );
};

DescriptionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default DescriptionForm;
