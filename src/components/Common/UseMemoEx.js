import React, { useMemo, useState } from "react";

const UseMemoEx = () => {
  const [count, setCount] = useState(0);
  const [change, setChange] = useState(false);

  const calculateExpensiveValue = useMemo(() => {
    console.log("Calculating CalculateExpensiveValue...");
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Calculated Value: {calculateExpensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>{change ? "clicked" : "not clicked"}</div>
      <button onClick={() => setChange(!change)}>Change</button>
    </div>
  );
};

export default UseMemoEx;
