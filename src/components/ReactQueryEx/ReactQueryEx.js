import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

const ReactQueryEx = () => {
  const { data, isLoading, error, isError, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      return res.json();
    },
    staleTime: 5 * 60 * 1000, // Data remains fresh for 5 minutes (no refetch during this time)
    cacheTime: 10 * 60 * 1000,
    retry: false,
  });

  const createPost = async (newPost) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });
    if (!res.ok) throw new Error("Failed to create post");
    return res.json();
  };

  const mutation = useMutation({
    mutationFn: () => createPost(),
    onSuccess: (dataVal) => {
      console.log("Post Created:", dataVal);
      refetch();
    },
  });

  const handleAddPost = (e) => {
    e.preventDefault();
    mutation.mutate({ title: "New Post", body: "Sample Content", userId: 1 });
  };

  if (isLoading) {
    return <span>Loading......</span>;
  }

  if (isError) return <span>Error: {error.message}</span>;
  return (
    <>
      {data && (
        <>
          <ul>
            {data.slice(0, 10).map((page) => (
              <React.Fragment key={page.id}>
                <li>{page.title}</li>
              </React.Fragment>
            ))}
          </ul>
          <button
            onClick={handleAddPost}
            type="button"
            disabled={mutation.isLoading}
          >
            Add Post
          </button>
        </>
      )}
    </>
  );
};

export default ReactQueryEx;
