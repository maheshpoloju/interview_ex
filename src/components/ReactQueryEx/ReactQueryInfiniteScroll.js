import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

const ReactQueryInfiniteScroll = () => {
  const fetchPosts = async ({ pageParam = 1 }) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=5`
    );
    if (!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    getNextPageParam: (_, allPages) => allPages.length + 1, // Next page number
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) return <span>Error: {error.message}</span>;

  return (
    <div>
      <h2>Infinite Scroll Posts</h2>
      {data?.pages.map((group, index) => (
        <ul key={index}>
          {group.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ))}
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage ? "Loading more..." : "Load More"}
      </button>
    </div>
  );
};

export default ReactQueryInfiniteScroll;
