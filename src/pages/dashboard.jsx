import Balance from '../components/balance'
import Income from '../components/income'
import Costs from '../components/costs'
import Savings from '../components/savings'
import DescriptionForm from '../components/descriptionForm'
import CashFlow from '../components/cashFlow'
import CostVisualizer from '../components/costVisualizer'


const Dashboard = () => {
  const handleTransactionSubmit = (transaction) => {
    console.log('transação recebida!', transaction)
  }

  return (
    <div className='transition-colors duration-300'>
      <h1 className='text-primary-950 text-4xl font-semibold ml-4 mt-2 dark:text-essencial-50'>Dashboard</h1>
      <div className='transition-colors duration-300 min-w-custom-66 min-h-custom-35 p-3 bg-essencial-100 border-essencial-200 border-2 rounded-2xl ml-4 dark:bg-support-900 dark:border-support-600'>
        <div className='grid grid-cols-4 '>
          <Balance />
          <Income />
          <Costs />
          <Savings />
        </div>
        <DescriptionForm onSubmit={handleTransactionSubmit} />
        <div className='grid grid-cols-4'>
          <div className='col-span-2'>
            <CashFlow />
          </div>
          <CostVisualizer />
        </div>
      </div>
    </div>

  )
}

export default Dashboard
