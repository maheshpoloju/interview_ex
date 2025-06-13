import "./App.css";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import React from "react";
import {
  UseFormEx,
  UseFormEx2,
  UseFormEx3,
  UseFormMUI1,
  UseFormMUI2,
} from "./components/UseFormHook";
import {
  ReactQueryEx,
  ReactQueryInfiniteScroll,
  ReactQueryPagination,
} from "./components/ReactQueryEx";
import {
  CustomHookEx,
  DebounceEx,
  Practice1,
  UseReducerEx,
} from "./components/Common";
import { Counter, DataFetcherRedux } from "./Pages";

const linksArr = [
  {
    links: [
      { to: "/", text: "Home" },
      { to: "/BasicUseFormEx", text: "Basic UseForm" },
      { to: "/UseFormEx2", text: "UseForm Example 2" },
      { to: "/UseFormEx3", text: "UseForm Example 3" },
      { to: "/UseFormMUI1", text: "UseForm MUI 1" },
      { to: "/UseFormMUI2", text: "UseForm MUI 2" },
      { to: "/ReactQueryEx", text: "ReactQuery Example 1" },
      { to: "/ReactQueryPagination", text: "ReactQuery Pagination" },
      { to: "/ReactQueryInfiniteScroll", text: "ReactQuery InfiniteScroll" },
      { to: "/CustomHookEx", text: "Custom Hook Example 1" },
    ],
  },
  {
    links: [
      { to: "/UseReducerEx", text: "useReducer Ex" },
      { to: "/DebounceEx", text: "Debounce Ex" },
      { to: "/Counter", text: "Counter_Redux Ex" },
      { to: "/DataFetcherRedux", text: "DataFetcher_Redux Ex" },
    ],
  },
  {
    links: [{ to: "/practice1", text: "Practice 1" }],
  },
];

function App() {
  return (
    <div className="App">
      <Router>
        <div className="links-div">
          {linksArr.map((linkObj, idx) => (
            <React.Fragment key={idx}>
              <ul className="links-ul">
                {linkObj.links.map(({ to, text }) => (
                  <li key={to}>
                    <Link to={to}>{text}</Link>
                  </li>
                ))}
              </ul>
              <div className="vl"></div>
            </React.Fragment>
          ))}
        </div>

        <hr />
        <Routes>
          <Route path="/BasicUseFormEx" element={<UseFormEx />} />
          <Route path="/UseFormEx2" element={<UseFormEx2 />} />
          <Route path="/UseFormEx3" element={<UseFormEx3 />} />
          <Route path="/UseFormMUI1" element={<UseFormMUI1 />} />
          <Route path="/UseFormMUI2" element={<UseFormMUI2 />} />
          <Route path="/ReactQueryEx" element={<ReactQueryEx />} />
          <Route
            path="/ReactQueryInfiniteScroll"
            element={<ReactQueryInfiniteScroll />}
          />
          <Route
            path="/ReactQueryPagination"
            element={<ReactQueryPagination />}
          />
          <Route path="/CustomHookEx" element={<CustomHookEx />} />
          <Route path="/UseReducerEx" element={<UseReducerEx />} />
          <Route path="/DebounceEx" element={<DebounceEx />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/DataFetcherRedux" element={<DataFetcherRedux />} />
          <Route path="/practice1" element={<Practice1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
