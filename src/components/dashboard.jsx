import { TransactionsProvider } from '../hooks/transactionsContext'
import Balance from './balance'
import Income from './income'
import Costs from './costs'
import Savings from './savings'
import DescriptionForm from './descriptionForm'
import CashFlow from './cashFlow'
import CostVisualizer from './costVisualizer'

const Dashboard = () => {
  return (
    <div className='transition-colors duration-300'>
      <TransactionsProvider>
        <h1 className='text-primary-950 text-4xl font-semibold ml-4 mt-2 dark:text-essencial-50'>Dashboard</h1>
        <div className='flex transition-colors duration-300 min-w-custom-78 min-h-custom-35 p-3 bg-essencial-100 border-essencial-200 border-2 rounded-2xl ml-4  dark:bg-support-900 dark:border-support-600'>
          <div className='grid grid-cols-3 mr-5 gap-x-4'>
            <Balance />
            <Income />
            <Costs />
            <div className='col-span-3'>
              <DescriptionForm />
            </div>
            <div className='col-span-2'>
              <CashFlow />
            </div>
            <CostVisualizer />
          </div>
          <Savings />
        </div>
      </TransactionsProvider>
    </div>
  )
}

export default Dashboard
