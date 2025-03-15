import React from "react";
import Typed from "./Typed";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col font-bold h-screen items-center justify-center text-center text-5xl mt-[-100px] text-white">
        <h1>Hello from About Route</h1>
        <Typed />
        <Link to='/' className="text-xl my-6 p-3 font-medium rounded-md bg-[#00df9a] text-black hover:text-gray-900">
          Home page
        </Link>
      </div>    
    </div>
  );
};

export default Contact;