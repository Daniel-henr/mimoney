import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendDown } from '@fortawesome/free-solid-svg-icons';

const Costs = () => {
    return (
        <div className='bg-essencial-50 border-essencial-200 border-custom-1 flex max-w-60 max-h-28 rounded-xl py-2 px-4'>
            <div className='flex-grow'>
                <div className='flex items-center'>
                    <FontAwesomeIcon icon={faArrowTrendDown} className='w-5 h-6' style={{ color: "#2a2b3d", }} />
                    <h2 className='text-xl text-primary-950 font-medium ml-1'>Despesa Mensal</h2>
                </div>
                <h2 className='font-bold text-3xl text-primary-950 mt-5'>-R$<span className='text-additional-700 ml-1'>0,00</span></h2>
            </div>
        </div>
    )
}

export default Costs
