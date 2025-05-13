import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-slate-100 to-green-500 mx-auto flex justify-center items-center">
      <div className="relative flex flex-col justify-center items-center w-[450px] h-[280px] bg-slate-100 rounded-xl shadow-xl overflow-hidden">
            
          <div className="w-[350px]  h-[250px] p-2 flex flex-col justify-center items-center">
            <div className=" flex items-start w-full mt-1  ">
                <h1 className=" font-bold text-2xl">
                    Login 
                 </h1>
            </div>

            <form className="mt-5 w-full">
            <div className="flex border  mt-2">
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
                <button className=" pt-1 pb-1 pr-4 pl-4 rounded-full text-white bg-green-400 shadow-md hover:scale-110 cursor-pointer transition-all duration-300 ">
                Login
                </button>
            </div>
            </form>
            <div className="flex w-full items-start mt-3  ">
                <h1 className=" text-sm">Don't have an account? 
                 <Link to={"/"} className="hover:text-green-500
                 hover: cursor-pointer"> Signup</Link>  
                 </h1>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
