import React, { useEffect, useState } from "react";

const DebounceEx = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
  const [data, setData] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedTerm) {
      const fetchData = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${debouncedTerm}`
        );
        const result = await response.json();
        setData(result);
      };

      fetchData();
    } else {
      setData([]);
    }
  }, [debouncedTerm]);

  return (
    <div>
      <input
        type="search"
        placeholder="Search post by Id..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {Object.keys(data)?.length > 0 && <div>Data: {JSON.stringify(data)}</div>}
    </div>
  );
};

export default DebounceEx;
