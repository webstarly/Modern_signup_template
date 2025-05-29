import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faSquareInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useFormContext } from "../context/FormContext";

const SecondSection = () => {
  const { moveLeft } = useFormContext();

  return (
    <div className=" absolute top-0 right-0 h-full w-[100%] sm:w-[70%] flex flex-col justify-center items-center p-4 sm:p-10">
      <div
        className={` w-full sm:w-[400px] h-[400px] flex flex-col items-center transition-all duration-900 ${
          moveLeft ? "translate-x-0 opacity-100 " : "translate-x-5 opacity-0"
        }`}
      >
        <h6
          className=" mt-6
            text-green-400 font-bold  text-2xl sm:text-3xl text-center"
        >
          Create an Account
        </h6>
        <div className="flex gap-6 sm:gap-10 mt-4">
          <FontAwesomeIcon
            icon={faSquareFacebook}
            className="text-blue-600 text-4xl sm:text-5xl shadow hover:text-blue-800 hover:scale-110 cursor-pointer transition-all duration-300"
            //style={{ boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.3)" }}
          />
          <FontAwesomeIcon
            icon={faSquareInstagram}
            className="text-pink-500 text-4xl sm:text-5xl shadow hover:text-pink-600 hover:scale-110 cursor-pointer transition-all duration-300"
            //style={{ boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.3)" }}
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-blue-600 text-4xl sm:text-5xl shadow hover:text-blue-800 hover:scale-110 cursor-pointer transition-all duration-300"
            //style={{ boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.3)" }}
          />
        </div>
        <h1 className="mt-3 text-sm sm:text-base text-center">or use your email for registration</h1>
        <form className="mt-5 w-full space-y-3">
          <div className="flex items-center border rounded p-1 ">
            <FontAwesomeIcon icon={faUser} className="p-2" />
            <input
              type="text"
              placeholder="enter your username"
              className="w-full bg-transparent focus:outline-none p-1"
            />
          </div>
          <div className="flex items-center border rounded p-1">
            <FontAwesomeIcon icon={faEnvelope} className="p-2" />
            <input
              type="text"
              placeholder="enter your email"
              className="w-full bg-transparent focus:outline-none p-1"
            />
          </div>
          <div className="flex items-center border rounded p-1">
            <FontAwesomeIcon icon={faLock} className="p-2" />
            <input
              type="text"
              placeholder="enter your password"
              className="w-full bg-transparent focus:outline-none p-1"
            />
          </div>
          <div className="flex justify-center mt-2">
            <Link
              to={"/login"}
              className=" px-6 py-2 rounded-full text-white bg-green-400 shadow-md hover:scale-110 cursor-pointer transition-all duration-300 "
              //onSubmit={handleOnSubmit}
            >
              Signup
            </Link>
          </div>
          <div className="mt-3 text-sm text-center">
            
              Already have an account?
              <Link
                to={"/login"}
                className="text-green-500 hover:underline ml-1"
              >
                {" "}
                Login
              </Link>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default SecondSection;
