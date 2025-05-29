import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-slate-300 to-green-500 mx-auto flex justify-center items-center">
      <div className="relative flex flex-col justify-center items-center w-[450px] h-[280px] bg-slate-100 rounded-xl shadow-xl overflow-hidden">
            
          <div className="w-[350px]  h-[250px] p-2 flex flex-col justify-center items-center">
            <div className=" flex items-start w-full mt-1  ">
                <h1 className=" font-bold text-2xl">
                    Login 
                 </h1>
            </div>

            <form className="mt-5 w-full space-y-3">
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
                <button className=" px-6 py-2 rounded-full text-white bg-green-400 shadow-md hover:scale-110 cursor-pointer transition-all duration-300 ">
                Login
                </button>
            </div>
            </form>
            <div className="mt-3 text-sm text-center  ">
                Don't have an account? 
                 <Link to={"/"} className="text-green-500 hover:underline ml-1"> Signup</Link>  
                 
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
