import React from 'react';
import Switch from './switch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar, faCircleUser, faArrowRightFromBracket, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSlack } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <nav className="transition-colors duration-500 bg-essencial-100 w-64 min-h-screen border-r-custom-1 border-essencial-200 dark:bg-support-900 dark:border-support-600">
      <header className="flex justify-center items-center pt-3 gap-1">
        <FontAwesomeIcon className="w-9 h-9" icon={faSackDollar} style={{ color: "#28c28b" }} />
        <h1 className="text-3xl font-bold text-primary-950 tracking-wide dark:text-essencial-50">
          Mi<span className="text-secondary-400">Money</span>
        </h1>
      </header>

      <section className="mt-11">
        <ul>
          <li className="flex">
            <div className="w-1.5 h-9 bg-secondary-400 rounded-2xl -ml-0.5 dark:bg-secondary-700"></div>
            <a
              className="flex justify-start items-center ml-4 py-1.5 pl-2 pr-20 bg-secondary-100 border-custom-1 border-secondary-300 rounded-md dark:bg-secondary-800 dark:border-secondary-700"
              href="#"
            >
              <FontAwesomeIcon className="w-4 h-4 text-secondary-600 dark:text-secondary-300" icon={faSlack}   />
              <h3 className="px-1 text-base font-bold text-secondary-600 dark:text-secondary-300">Dashboard</h3>
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-custom-21">
        <div className="ml-3 flex justify-between items-center">
          <h2 className="text-base font-bold text-primary-950 dark:text-essencial-50">Theme color</h2>
            <Switch />
        </div>

        <div className="mt-4 mx-3 px-2 h-11 w-56 bg-essencial-50 flex border-essencial-200 rounded-lg border-custom-1 items-center dark:bg-support-950 dark:border-support-600">
          <FontAwesomeIcon icon={faCircleUser} className="w-8 h-8 text-support-600 dark:text-support-200"  />
          <div className="text-xs ml-4">
            <h3 className="font-bold text-primary-950 dark:text-essencial-50">Daniel Henrique</h3>
            <h3 className="font-bold text-support-600 mt-2 dark:text-primary-400">danielhpp05@gmail.com</h3>
          </div>
        </div>

        <button className="mt-3 ml-3 w-10 h-8 cursor-pointer bg-essencial-50 border-custom-1 border-essencial-200 rounded-md flex justify-center items-center dark:bg-support-950 dark:border-support-600">
          <FontAwesomeIcon icon={faArrowRightFromBracket} className="w-4 h-4 text-primary-950 dark:text-essencial-50"  />
        </button>
      </section>

      <footer className="flex justify-center mt-4 text-support-600 text-sm font-bold dark:text-support-200">
        <p>© Daniel Henrique, 2024</p>
      </footer>
    </nav>
  );
};

export default Navbar;
