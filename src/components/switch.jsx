import React, { useState, useEffect } from 'react'

const Switch = () => {
    const [darkMode, setDarkMode] = useState(false)

    const ToggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    return (
     
            
            <label className='relative inline-flex items-center  cursor-pointer mr-7 '>
            <div className=''>
                
            </div>
                <button
                    onClick={ToggleDarkMode}
                >
                    <span className={`block w-11 h-6 rounded-full transition shadow-md ${darkMode ? 'bg-support-950' : 'bg-essencial-50'}`}></span>
                    <span className={`dot absolute left-1 top-1 w-4 h-4 rounded-full transition transform ${darkMode ? 'translate-x-5 bg-support-700' : 'bg-essencial-300'}`}></span>
                </button>
            </label>
      
    )
}

export default Switch
