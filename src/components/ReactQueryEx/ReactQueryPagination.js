import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const ReactQueryPagination = () => {
  const [page, setPage] = useState(1);
  const usersPerPage = 3;
  const fetchUsers = async (page) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=3`
    );
    if (!res.ok) throw new Error("Failed to fetch users");
    const totalCount = res.headers.get("X-Total-Count");
    const totalPages = Math.ceil(totalCount / usersPerPage);

    const users = await res.json();
    return { users, totalPages };
  };

  const { data, isLoading, error, isError, isFetching } = useQuery({
    queryKey: ["users", page],
    queryFn: () => fetchUsers(page),
    staleTime: 5 * 60 * 1000, // Data remains fresh for 5 minutes (no refetch during this time)
    cacheTime: 10 * 60 * 1000,
    retry: false,
    keepPreviousData: true,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) return <span>Error: {error.message}</span>;

  const disableNextButton = page === data?.totalPages;

  return (
    <>
      <div>
        <h2>Users (Page {page})</h2>
        <ul>
          {data?.users?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          disabled={disableNextButton}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
        {isFetching && <p>Fetching new data...</p>}
      </div>
    </>
  );
};

export default ReactQueryPagination;
