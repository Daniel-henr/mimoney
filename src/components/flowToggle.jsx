import PropTypes from "prop-types"


const FlowToggle = ({isExpense, setisExpense}) => {
  

  const ToggleisExpense = () => {
    setisExpense((prev) => !prev)
  }

  return (
    <div className='ml-6 flex items-center space-x-2 mr-4'>
      <span className={`text-sm  font-medium transition-colors duration-300 ${isExpense ? 'text-gray-400 dark:text-gray-500' : ' text-primary-950 dark:text-essencial-200'}`}>Entrada</span>

      <div className='relative inline-flex items-center cursor-pointer'>
        <button
          type="button"
          onClick={ToggleisExpense}
        >
          <span className={`block w-11 h-6 rounded-full transition shadow-md ${isExpense ? 'bg-additional-400' : 'bg-secondary-400'}`}></span>
          <span className={`dot absolute left-1 top-1 w-4 h-4 rounded-full transition transform ${isExpense ? 'translate-x-5 bg-additional-600' : 'bg-secondary-600'}`}></span>
        </button>
      </div>

      <span className={`text-sm  font-medium transition-colors duration-300 ${isExpense ? 'text-primary-950 dark:text-essencial-200' : 'text-gray-400 dark:text-gray-500'}`}>Saída</span>
    </div>
  )
}

FlowToggle.propTypes = {
  isExpense: PropTypes.bool.isRequired,
  setisExpense: PropTypes.func.isRequired,
};


export default FlowToggle
