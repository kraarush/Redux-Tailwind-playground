import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, decrementByAmount, increment, incrementByAmount, reset } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-white py-8 flex flex-col items-center">
      <h1 className="md:text-5xl sm:text-3xl text-2xl px-10 pb-2 text-center">Counter using redux</h1>
        <span className="py-6 text-4xl">{count}</span>
      <div className=" flex gap-5">
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
    </div>
  );
};

export default Counter;
