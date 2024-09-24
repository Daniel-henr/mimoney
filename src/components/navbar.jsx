import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { faSlack } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    return (
        <div className='bg-essencial-100 w-64 min-h-screen border-r-custom-1 border-essencial-200'>
            <div>
                <div className='flex justify-center items-center pt-3 gap-1'>
                    <FontAwesomeIcon className='w-9 h-9' icon={faSackDollar} style={{ color: "#28c28b", }} />
                    <h1 className=' text-3xl font-bold text-primary-950 '>Mi<span className='text-secondary-400'>Money</span></h1>
                </div>
                <div className='mt-11'>
                    <ul>
                        <li className='flex '>
                            <div className='w-1.5 h-9 bg-secondary-400 rounded-2xl -ml-0.5'></div>
                            <a className='flex justify-start items-center ml-4 py-1.5 pl-2 pr-20 bg-secondary-100 border-custom-1 border-secondary-300 rounded-md ' href="#"> 
                            <FontAwesomeIcon className='w-4 h-4' icon={faSlack} style={{color: "#03986B",}} />
                                <h3 className='px-1 text-base font-bold text-secondary-600'>Dashboard</h3>
                                </a>
                        </li>
                    </ul>
                </div>
                <div className='ml-3  mt-custom-20'>
                    <h2 className='text-base font-bold text-primary-950'>Theme color</h2>
                </div>
            </div>
        </div>
    )
}

export default Navbar
