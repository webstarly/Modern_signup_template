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
    <div className=" absolute top-0 right-0 h-full w-[70%] flex flex-col justify-center items-center p-10">
      <div
        className={` w-[400px] h-[400px] flex flex-col items-center transition-all duration-900 ${
          moveLeft ? "translate-x-0 opacity-100 " : "translate-x-5 opacity-0"
        }`}
      >
        <h6
          className=" mt-10
            text-green-400 font-bold  text-3xl"
        >
          Create an Account
        </h6>
        <div className="flex flex-row gap-10 mt-2">
          <FontAwesomeIcon
            icon={faSquareFacebook}
            className="text-blue-600 text-5xl shadow-sm hover:text-blue-800 hover:scale-110 cursor-pointer transition-all duration-300"
            style={{ boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.3)" }}
          />
          <FontAwesomeIcon
            icon={faSquareInstagram}
            className="text-pink-500 text-5xl hover:text-pink-600 hover:scale-110 cursor-pointer transition-all duration-300"
            style={{ boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.3)" }}
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-blue-600 text-5xl hover:text-blue-800 hover:scale-110 cursor-pointer transition-all duration-300"
            style={{ boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.3)" }}
          />
        </div>
        <h1 className="mt-2 text-md">or use your email for registration</h1>
        <form className="mt-5">
          <div className="flex border ">
            <FontAwesomeIcon icon={faUser} className="p-2" />
            <input
              type="text"
              placeholder="enter your username"
              className="bg-transparent  shadow-sm w-full focus:outline-none p-1 rounded"
            />
          </div>
          <div className="flex border mt-2">
            <FontAwesomeIcon icon={faEnvelope} className="p-2" />
            <input
              type="text"
              placeholder="enter your email"
              className="bg-transparent shadow-sm w-full focus:outline-none  p-1 rounded"
            />
          </div>
          <div className="flex border mt-2">
            <FontAwesomeIcon icon={faLock} className="p-2" />
            <input
              type="text"
              placeholder="enter your password"
              className="bg-transparent   shadow-sm w-full focus:outline-none p-1 rounded"
            />
          </div>
          <div className="flex justify-center p-2 mt-2 items-center">
            <Link
              to={"/login"}
              className=" pt-1 pb-1 pr-4 pl-4 rounded-full text-white bg-green-400 shadow-md hover:scale-110 cursor-pointer transition-all duration-300 "
              //onSubmit={handleOnSubmit}
            >
              Signup
            </Link>
          </div>
          <div className="flex w-full items-start mt-3  ">
            <h1 className=" text-sm">
              Already have an account?
              <Link
                to={"/login"}
                className="hover:text-green-500
                 hover: cursor-pointer"
              >
                {" "}
                Login
              </Link>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SecondSection;
