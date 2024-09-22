import React from "react";
import { useFetch } from "../../Common";

const CustomHookEx = () => {
  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/1`
  );
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>Data: {JSON.stringify(data)}</div>;
};

export default CustomHookEx;
