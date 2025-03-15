import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { decrement, decrementByAmount, increment, incrementByAmount, reset } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-white p-8 my-4 flex flex-col items-center lg:my-32">
      <h1 className="md:text-5xl sm:text-3xl text-2xl px-10 pb-2 text-center">Counter App</h1>
      <p className="py-2 text-center font-medium md:text-2xl sm:text-xl ">This counter app is implement using redux toolkit and it is for practicing purpose </p>
        <span className="py-6 text-4xl">{count}</span>
      <div className=" flex gap-5 max-sm:flex-col">
      <button aria-label="Decrement value" onClick={() => dispatch(decrementByAmount(5))}  className="p-4 rounded-md font-bold text-black bg-[#00df9a] ">
          Decrement by 5
        </button>
        <button aria-label="Increment value" onClick={() => dispatch(increment())} className="p-4 rounded-md font-bold text-black bg-[#00df9a] ">
          Increment
        </button>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}  className="p-4 rounded-md font-bold text-black bg-[#00df9a] ">
          Decrement
        </button>
        <button aria-label="Decrement value" onClick={() => dispatch(incrementByAmount(5))}  className="p-4 rounded-md font-bold text-black bg-[#00df9a] ">
          Increment by 5
        </button>
        <button aria-label="Decrement value" onClick={() => dispatch(reset(5))}  className="p-4 rounded-md font-bold text-black bg-[#00df9a] ">
          Reset
        </button>
      </div>
      <Link to='/' className="text-xl my-6 p-3 mt-16 font-medium rounded-md bg-[#00df9a] text-black hover:text-gray-900">
          Home page
        </Link>
    </div>
  );
};

export default Counter;
