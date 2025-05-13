import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import ThirdSection from './ThirdSection';
import { useFormContext } from '../context/FormContext';


const FirstSection = () => { 

     const  {moveLeft, setMoveLeft, handleOnClick}  = useFormContext();

  return (
    <div
          className={`absolute z-10 bg-green-400 h-full w-full rounded-xl flex justify-center transform transition-all  duration-700 ${
            moveLeft ? "translate-x-[-66%] " : "translate-x-0"
          }`}
        >
          {!moveLeft ? (
            <button
              className={`absolute bg-white text-md mt-96 pt-1 pb-1 pr-4 pl-4 rounded-full text-green-400 shadow-xl hover:text-white hover:bg-green-300 hover:border-1 cursor-pointer transition-all duration-300 transform `}
              onClick={handleOnClick}
            >
              Signup
            </button>
          ) : (
            <FontAwesomeIcon
              icon={faAnglesLeft }
              className={`absolute text-white mt-96 text-md cursor-pointer hover:scale-110 transition-transform duration-300 ${
                moveLeft ? "translate-x-[150px] " : "translate-x-0"
              }`}
              onClick={() => {
                setMoveLeft(false);
              }}
            />
          )}

        <ThirdSection  />
        
    </div>      
  )
}

export default FirstSection;