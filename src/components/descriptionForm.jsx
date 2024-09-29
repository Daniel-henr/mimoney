import React from 'react'

const DescriptionForm = () => {
  return (
    <div className='-mt-custom-17 bg-essencial-50 border-custom-1 border-essencial-200 rounded-xl max-w-custom-47 max-h-24 flex items-center'>
      <div>
        <h2>Descrição</h2>
        <label className='border-essencial-200  ' >
          <input className='bg-support-100 border-support-200 border-custom-1' type="text" />
        </label>
      </div>
      <div className='ml-5'>
        <h2>Valor</h2>
        <label className='border-essencial-200  ' >
          <input className='bg-support-100 border-support-200 border-custom-1' type="number" />
        </label>
      </div>
    </div>
  )
}

export default DescriptionForm
