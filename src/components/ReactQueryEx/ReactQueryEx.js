import React from "react";
import { useQuery } from "@tanstack/react-query";

const ReactQueryEx = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      return res.json();
    },
    staleTime: 5 * 60 * 1000, // Data remains fresh for 5 minutes (no refetch during this time)
    cacheTime: 10 * 60 * 1000,
  });
  if (isLoading) {
    return <span>Loading...</span>;
  }
  return (
    <>
      {data && (
        <ul>
          {data?.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ReactQueryEx;
