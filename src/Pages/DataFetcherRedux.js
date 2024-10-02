import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../actions/dataActions";

const DataFetcherRedux = () => {
  const { data, loading, error } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Data Fetcher Example</h1>
      <button onClick={() => dispatch(fetchData())}>Fetch Data</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data.length > 0 && (
        <ul>
          {data.slice(0, 5).map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetcherRedux;
