import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Rolo from "./components/Rolo";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Pasos from "./components/Pasos";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/joja" element={<Rolo />} />
        <Route exact path="/detail" element={<Detail />} />
        <Route path="/steps" element={<Pasos />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
