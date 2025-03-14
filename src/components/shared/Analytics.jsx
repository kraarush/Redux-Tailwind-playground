import React from "react";
import Laptop from "@/assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 items-center">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="laptop image" />
        <div className="flex flex-col sm:py-4">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="font-bold md:text-4xl sm:text-3xl text-xl py-2 ">Manage Data Analytics Centrally</h1>
          <p className="font-medium py-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sed ad
            fuga quidem velit. Dolorem eligendi iure reprehenderit optio rem
            perspiciatis consectetur, maxime ipsam minus. Iure laudantium
            accusantium pariatur velit!
          </p>
          <button className="w-[200px] bg-black p-3 text-[#00df9a] rounded-md font-bold mx-auto my-4 md:mx-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  ); 
};

export default Analytics;
