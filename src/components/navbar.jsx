import Switch from './switch';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar, faCircleUser, faArrowRightFromBracket, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { faSlack } from '@fortawesome/free-brands-svg-icons';
import Navbutton from './navbutton';

const Navbar = ({activeComponent, setActiveComponent}) => {

  return (
    <nav className="relative overflow-x-hidden transition-colors duration-300 bg-essencial-100 w-64 min-h-screen border-r-custom-1 border-essencial-200 dark:bg-support-900 dark:border-support-600">
      <header className="flex justify-center items-center pt-3 gap-1">
        <FontAwesomeIcon className="w-9 h-9" icon={faSackDollar} style={{ color: "#28c28b" }} />
        <h1 className="text-3xl font-bold text-primary-950 tracking-wide dark:text-essencial-50">
          Mi<span className="text-secondary-400">Money</span>
        </h1>
      </header>

      <section className="mt-11 h-5.5">
        <ul>
          <Navbutton
          isActive={activeComponent === 'dashboard'}
          onClick={() => setActiveComponent('dashboard')}
          icon={faSlack}
          label="Dashboard"
          />
          <Navbutton 
          isActive={activeComponent === 'history'}
          onClick={() => setActiveComponent('history')}
          icon={faClockRotateLeft}
          label="Historico"
          />
        </ul>
      </section>

      <section className="mt-custom-45">
        <div className="ml-3 flex justify-between items-center">
          <h2 className="text-base font-bold text-primary-950 dark:text-essencial-50">Theme color</h2>
          <Switch />
        </div>

        <div className="transition-colors duration-500 mt-4 mx-3 px-2 h-11 w-56 bg-essencial-50 flex border-essencial-200 rounded-lg border-custom-1 items-center dark:bg-support-950 dark:border-support-600">
          <FontAwesomeIcon icon={faCircleUser} className="w-8 h-8 text-support-600 dark:text-support-200" />
          <div className="text-xs ml-4">
            <h3 className="font-bold text-primary-950 dark:text-essencial-50">Daniel Henrique</h3>
            <h3 className="font-bold text-support-600 mt-2 dark:text-primary-400">danielhpp05@gmail.com</h3>
          </div>
        </div>

        <button className="transition-colors duration-500 mt-3 ml-3 w-10 h-8 cursor-pointer bg-essencial-50 border-custom-1 border-essencial-200 rounded-md flex justify-center items-center dark:bg-support-950 dark:border-support-600">
          <FontAwesomeIcon icon={faArrowRightFromBracket} className="w-4 h-4 text-primary-950 dark:text-essencial-50" />
        </button>
      </section>

      <footer className="flex justify-center mt-4 text-support-600 text-sm font-bold dark:text-support-200">
        <p>© Daniel Henrique, 2024</p>
      </footer>
    </nav>
  );
};

Navbar.propTypes = {
  activeComponent: PropTypes.string.isRequired,
  setActiveComponent: PropTypes.func.isRequired,
};

export default Navbar;
