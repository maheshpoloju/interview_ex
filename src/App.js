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
import { ReactQueryEx } from "./components/ReactQueryEx";

function App() {
  const links = [
    { to: "/", text: "Home" },
    { to: "/BasicUseFormEx", text: "Basic UseForm" },
    { to: "/UseFormEx2", text: "UseForm Example 2" },
    { to: "/UseFormEx3", text: "UseForm Example 3" },
    { to: "/UseFormMUI1", text: "UseForm MUI 1" },
    { to: "/UseFormMUI2", text: "UseForm MUI 2" },
    { to: "/ReactQueryEx", text: "ReactQuery Example 1" },
  ];
  return (
    <div className="App">
      <ul className="links-ul">
        {links.map(({ to, text }) => (
          <li key={to}>
            <Link to={to}>{text}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <Router>
        <Routes>
          <Route path="/BasicUseFormEx" element={<UseFormEx />} />
          <Route path="/UseFormEx2" element={<UseFormEx2 />} />
          <Route path="/UseFormEx3" element={<UseFormEx3 />} />
          <Route path="/UseFormMUI1" element={<UseFormMUI1 />} />
          <Route path="/UseFormMUI2" element={<UseFormMUI2 />} />
          <Route path="/ReactQueryEx" element={<ReactQueryEx />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
