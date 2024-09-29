import React from 'react'
import Balance from '../components/balance'
import Income from '../components/income'
import Costs from '../components/costs'
import Savings from '../components/savings'
import DescriptionForm from '../components/descriptionForm'


const Dashboard = () => {
  return (
    <div>
      <h1 className='text-primary-950  text-4xl font-semibold ml-4 mt-2'>Dashboard</h1>
      <div className=' min-w-custom-66 min-h-custom-35 p-3 bg-essencial-100 border-essencial-200 border-2 rounded-2xl ml-4'>
        <div className='flex grid grid-cols-4 '>
            <Balance />
            <Income />
            <Costs />
            <Savings />
            
        </div>
        <DescriptionForm />
      </div>
    </div>

  )
}

export default Dashboard
