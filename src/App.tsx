import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Home, Timeline } from "./component";
import { PAGE_HOME, PAGE_TIMELINE } from "./constants/router";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={PAGE_HOME} element={<Home />} />
        <Route path={PAGE_TIMELINE} element={<Timeline />} />
      </Routes>
    </Router>
  );
}

export default App;
