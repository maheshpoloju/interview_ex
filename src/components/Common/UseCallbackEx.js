import React, { memo, useCallback, useState } from "react";

const UseCallbackEx = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
    setCount(count + 1);
  }, []);

  return (
    <>
      <h1>Count: {count}</h1>
      <ChildComponent onClick={handleClick} />
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment Count
      </button>
    </>
  );
};

const ChildComponent = memo(({ onClick }) => {
  console.log("Rendering Child Component");
  return <button onClick={onClick}>Click Me</button>;
});

export default UseCallbackEx;
