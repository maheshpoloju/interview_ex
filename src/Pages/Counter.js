import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../actions/counterActions";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button
        onClick={() => dispatch(decrement())}
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
