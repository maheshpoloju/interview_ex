import React, { useCallback, useEffect, useState } from "react";
import { useDebounce } from "../../Hooks";

const DebounceEx = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const debouncedTerm = useDebounce(searchTerm, 500);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${debouncedTerm}`
      );
      const result = await response.json();
      setData(result);
    } catch (err) {
      console.log("Err in useDebounce fetchData: ", err);
    }
  }, [debouncedTerm]);

  useEffect(() => {
    if (debouncedTerm?.trim()) {
      fetchData(debouncedTerm);
    } else {
      setData([]);
    }
  }, [debouncedTerm, fetchData]);

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
