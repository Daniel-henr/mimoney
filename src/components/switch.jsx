import React, { useState } from 'react'


const Switch = () => {
    const [isChecked, setIsChecked] = useState(false)

    const handleToggle = () => {
        setIsChecked(!isChecked)
    }

    return (

        <label className='relative inline-flex items-center cursor-pointer mr-7 '>
            <input
                type='checkbox'
                checked={isChecked}
                onChange={handleToggle}
                className='sr-only'
            />
            <span className={`block w-11 h-6 rounded-full transition shadow-md ${isChecked ? 'bg-primary-950' : 'bg-essencial-50'}`}></span>
            <span className={`dot absolute left-1 top-1 w-4 h-4 rounded-full transition transform ${isChecked ? 'translate-x-5 bg-primary-400' : 'bg-essencial-300'}`}></span>
        </label>

    )
}

export default Switch
