import React from 'react'
import { useFormContext } from '../context/FormContext';

const ThirdSection = () => {

    const {moveLeft, showThirdSection} = useFormContext();

  return (
    <div className=' flex w-full h-80 relative'>
        {showThirdSection && (
            <div
            className={`absolute right-0 h-60 flex  flex-col items-start p-5 transform transition-all  ease-in ${
                moveLeft
                  ? "translate-x-0 opacity-100 duration-700 "
                  : "translate-x-10 opacity-0  duration-600"    
            }`}
            >
            <h6 className=" font-bold  text-6xl mt-30 text-white ">Hello!</h6>
            <p className=" font-semibold text-lg text-white ">
                There is no better place
            </p>
            </div> 
        
        )}
    </div>      
  )  
}

export default ThirdSection;