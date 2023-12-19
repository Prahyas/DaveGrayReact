import React, { useContext } from "react";
import useFetchData from "../hooks/useFetchData";
import { useMyContext } from "../context/contextData";
import { increment, decrement, incrementByAmt } from "../redux/counterSlice";
import { useSelector, useDispatch } from "react-redux";

const About = () => {
  // const { data, updateData } = useMyContext();
  //   const { data, error, loading } = useFetchData("items");
  //   console.log("custom hook", data, error, loading);
  const data = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="flex gap-5">
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementByAmt(5))}>Increase by 5</button>
      <span>Count : {data}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default About;
