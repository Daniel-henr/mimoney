import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import CircularProgress from './circularProgress';

const Savings = () => {
    return (
        <div className='max-w-64 min-h-custom-27 bg-essencial-50 border-essencial-200 border-custom-1 rounded-xl py-2 px-4'>
            <div>
                <div className='flex items-center'>
                    <FontAwesomeIcon icon={faPiggyBank} className='w-6 h-6' style={{ color: "#2a2b3d", }} />
                    <h2 className='text-primary-950 font-medium text-xl ml-1'>Cofrinho</h2>
                </div>
                <div className=''>
                    <h2 className='text-2xl text-primary-950 font-medium mt-6 ml-3'>Monitor Novo</h2>
                    <div className='flex justify-center mt-12'>
                        <CircularProgress />
                    </div>
                    <div className='flex justify-center '>
                        <h1 className='font-semibold text-xl text-primary-950 mt-9'>Valor Total : <span>800,00</span></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Savings
