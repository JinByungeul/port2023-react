import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import lenis from "./utils/lenis";
import link from "./utils/link";
import HomeView from "./views/HomeView";

const App = () => {
  useEffect(() => {
    lenis();
    link();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;