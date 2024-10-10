import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const Navbutton = ({ isActive, onClick, icon, label }) => {
    return (
        <li className="flex w-full mb-3 ">
            <button className='flex w-full group relative ' onClick={onClick}>
                <div className={`duration-500 w-1.5 h-9 rounded-2xl -ml-0.5 ${isActive ? 'bg-secondary-400 dark:bg-secondary-700' : ''}`}></div>
                <div className={`duration-500 flex justify-center items-center ml-4 py-1.5 pl-2 pr-20 rounded-md relative z-10  ${isActive
                    ? 'bg-secondary-100 border-custom-1 border-secondary-300 dark:bg-secondary-800 dark:border-secondary-700'
                    : 'w-full flex justify-center text-secondary-400 duration-700 hover:text-secondary-600 dark:text-secondary-700 dark:hover:text-secondary-300'
                    }`}>
                    <FontAwesomeIcon className={`w-4 h-4  ${isActive ? 'text-secondary-600 dark:text-secondary-300' : ''}`} icon={icon} />
                    <h3 className={`px-1 text-base font-bold  ${isActive ? 'text-secondary-600 dark:text-secondary-300' : ''}`}>{label}</h3>
                </div>
                {!isActive && (
                    <span className="absolute left-0 top-0 w-full h-full shadow-sm bg-essencial-50 border-y-custom-1 border-essencial-200 transition-transform duration-700 transform -translate-x-full group-hover:translate-x-0 dark:bg-support-950 dark:border-support-700"></span>
                )}




            </button>


        </li>
    )
}

Navbutton.propTypes = {
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
};

export default Navbutton
