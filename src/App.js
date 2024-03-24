import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Reservations from "./Components/Reservations";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./Components/404";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Reservations />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
