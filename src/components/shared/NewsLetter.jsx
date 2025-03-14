import React from "react";

const NewsLetter = () => {
  return (
    <div className="text-white py-16 px-4 w-full">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
         
        <div className="lg:col-span-2 m-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl py-2 font-bold py-2">
            {" "}
            Want tips & tricks to optimize your flow?{" "}
          </h1>
          <p> Sign up to our newsletter and stay up to date </p>
        </div>

        <div className="my-4">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-3 w-4/5 text-black rounded-md "
            />
            <button className="bg-[#00df9a] w-[200px] font-medium rounded-md text-black mx-4 text-lg py-3 my-6">
              Notify me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our 
            <span className="text-[#00df9a] font-medium"> Privay policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
