import React from 'react';
import Switch from './switch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar, faCircleUser, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faSlack } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-essencial-100 w-64 min-h-screen border-r-custom-1 border-essencial-200">
      <header className="flex justify-center items-center pt-3 gap-1">
        <FontAwesomeIcon className="w-9 h-9" icon={faSackDollar} style={{ color: "#28c28b" }} />
        <h1 className="text-3xl font-bold text-primary-950 tracking-wide">
          Mi<span className="text-secondary-400">Money</span>
        </h1>
      </header>

      <section className="mt-11">
        <ul>
          <li className="flex">
            <div className="w-1.5 h-9 bg-secondary-400 rounded-2xl -ml-0.5"></div>
            <a
              className="flex justify-start items-center ml-4 py-1.5 pl-2 pr-20 bg-secondary-100 border-custom-1 border-secondary-300 rounded-md"
              href="#"
            >
              <FontAwesomeIcon className="w-4 h-4" icon={faSlack} style={{ color: "#03986B" }} />
              <h3 className="px-1 text-base font-bold text-secondary-600">Dashboard</h3>
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-custom-21">
        <div className="ml-3 flex justify-between items-center">
          <h2 className="text-base font-bold text-primary-950">Theme color</h2>
          <Switch />
        </div>

        <div className="mt-4 mx-3 px-2 h-11 w-56 bg-essencial-50 flex border-essencial-200 rounded-lg border-custom-1 items-center">
          <FontAwesomeIcon icon={faCircleUser} className="w-8 h-8" style={{ color: "#5a5a5a" }} />
          <div className="text-xs ml-4">
            <h3 className="font-bold text-primary-950">Daniel Henrique</h3>
            <h3 className="font-bold text-support-600 mt-2">danielhpp05@gmail.com</h3>
          </div>
        </div>

        <button className="mt-3 ml-3 w-10 h-8 cursor-pointer bg-essencial-50 border-custom-1 border-essencial-200 rounded-md flex justify-center items-center">
          <FontAwesomeIcon icon={faArrowRightFromBracket} className="w-4 h-4" style={{ color: "#2a2b3d" }} />
        </button>
      </section>

      <footer className="flex justify-center mt-4 text-support-600 text-sm font-bold">
        <p>© Daniel Henrique, 2024</p>
      </footer>
    </nav>
  );
};

export default Navbar;
