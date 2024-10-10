import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const History = () => {
    return (
        <div>
            <h1 className="text-primary-950 text-4xl font-semibold ml-4 mt-2 dark:text-essencial-50">Histórico</h1>
            <div className=" min-w-custom-78 min-h-custom-35 p-3 bg-essencial-100 border-essencial-200 border-2 rounded-2xl ml-4 dark:bg-support-900 dark:border-support-700">
                <div className="flex justify-between mt-10 mx-16">
                    <button className="bg-essencial-50 border-custom-1 border-essencial-200 w-32 rounded-md dark:bg-support-950 dark:border-support-700">
                        <h3 className="text-primary-950 font-semibold dark:text-essencial-50">+ Add filtro</h3>
                    </button>
                    <div className='flex gap-x-4'>
                        <button className="flex justify-center items-center text-primary-950 bg-essencial-50 w-12 h-8 border-custom-1 border-essencial-200 rounded-md dark:text-essencial-50 dark:bg-support-950 dark:border-support-700">
                            <FontAwesomeIcon className='w-5 h-4' icon={faPenToSquare} />
                        </button>
                        <button className='flex justify-center items-center text-primary-950 bg-essencial-50 w-12 h-8 border-custom-1 border-essencial-200 rounded-md dark:text-essencial-50 dark:bg-support-950 dark:border-support-700'>
                            <FontAwesomeIcon className='w-4 h-5' icon={faTrash} />
                        </button>
                    </div>

                </div>
                <article className='mt-5 w-custom-77'>
                    <div className='flex justify-between items-center py-5 text-primary-950 font-semibold text-lg dark:text-essencial-100'>
                        <h3 className='w-80 flex justify-center'>Data</h3>
                        <h3 className='w-80 flex justify-center'>Descrição</h3>
                        <h3 className='w-80 flex justify-center'>Valor</h3>
                        <h3 className='w-80 flex justify-center'>Tipo</h3>
                    </div>
                    <div className='h-custom-60 bg-essencial-50 border-2 border-essencial-200 rounded-lg dark:bg-support-950 dark:border-support-700'>
                        <div className='py-2.5 whitespace-nowrap border-b-2 border-essencial-200 flex justify-between items-center text-support-800 font-semibold dark:text-essencial-200 dark:border-support-700'>
                            <div className='w-80 flex justify-center'>
                                <h3>24/09/2024 - 13:42</h3>
                            </div>
                            <div className='w-80 flex justify-center'>
                                <h3 >Skin Valorant</h3>
                            </div>
                            <div className='w-80 flex justify-center'>
                                <h3>64,00</h3>
                            </div>
                            <div className='w-80 flex justify-center'>
                                <h3>Saída</h3>
                            </div>
                        </div>
                    </div>
                </article>

            </div>
        </div>
    )
}

export default History
