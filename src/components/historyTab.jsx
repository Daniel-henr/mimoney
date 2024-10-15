import { useTransactions } from '../hooks/transactionsContext';

const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).replace('R$', '').trim()
  };

const HistoryTab = () => {
    const { transactions } = useTransactions()

    const sortedTransactions = [...transactions].sort((a, b) => {
        const dateA = new Date(`${a.Date} ${a.time}`)
        const dateB = new Date(`${b.Date} ${b.time}`)
        return dateA - dateB
    })

    return (
        <div>
                {sortedTransactions.map((transaction, index) => (
                    <div key={index} className='py-2.5 whitespace-nowrap border-b-2 border-essencial-200 flex justify-between items-center text-support-800 font-semibold dark:text-essencial-200 dark:border-support-700'>
                        <div className='w-80 flex justify-center'>
                        <h3>{transaction.description}</h3>                            
                        </div>
                        <div className='w-80 flex justify-center'>
                        <h3>{formatCurrency(transaction.value)}</h3>
                        </div>
                        <div className='w-80 flex justify-center'>                            
                            <h3>{transaction.type}</h3>
                        </div>
                        <div className='w-80 flex justify-center'>                            
                            <h3>{transaction.Date} - {transaction.time}</h3>
                        </div>
                    </div>
                ))}
            </div>
    )
}

export default HistoryTab
