import React from 'react';

const DescriptionForm = () => {
  return (
    <div className='-mt-custom-17 px-5 py-6 bg-essencial-50 border-custom-1 border-essencial-200 rounded-xl max-w-custom-47 max-h-24 flex items-center'>
      {/* Seção de Descrição */}
      <div className='flex'>
        <div>
          <h2 className='font-bold text-sm text-primary-950'>Descrição</h2>
          <label className='border-essencial-200'>
            <input
              className='h-7 w-64 bg-support-100 border-support-200 border-custom-1 rounded-md placeholder:font-semibold pl-1 text-sm focus:outline-none text-primary-950 font-semibold'
              type="text"
              placeholder='Escreva uma descrição'
            />
          </label>
        </div>

        {/* Seção de Valor */}
        <div className='ml-5'>
          <h2 className='font-bold text-sm text-primary-950'>Valor</h2>
          <label className='border-essencial-200'>
            <input
              className='w-28 h-7 bg-support-100 border-support-200 border-custom-1 rounded-md placeholder:font-semibold pl-1 focus:outline-none font-semibold text-primary-950'
              type="number"
              placeholder='0,00'
            />
          </label>
        </div>
      </div>

      {/* Seção de Entrada/Saída */}
      <div className='ml-6 flex items-center space-x-4'>
        <label className='flex items-center space-x-2'>
          <input type="checkbox" className='hidden peer' />
          <span className='w-5 h-5 inline-block rounded-full bg-secondary-100 border-secondary-200 border-custom-1 peer-checked:bg-secondary-400'></span>
          <span className='text-sm text-primary-950 font-medium'>Entrada</span>
        </label>

        <label className='flex items-center space-x-2'>
          <input type="checkbox" className='hidden peer' />
          <span className='w-5 h-5 inline-block rounded-full bg-additional-100 border-additional-200 border-custom-1 peer-checked:bg-additional-600'></span>
          <span className='text-sm text-primary-950 font-medium'>Saída</span>
        </label>
      </div>

      {/* Botão Adicionar */}
      <section>
        <button className='ml-7 w-24 h-7 flex items-center justify-center rounded-md bg-secondary-400'>
          <h2 className='text-essencial-50 text-sm tracking-wide font-semibold'>Adicionar</h2>
        </button>
      </section>
    </div>
  );
}

export default DescriptionForm;
