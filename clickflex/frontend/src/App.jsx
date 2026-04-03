import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import LeftSideNav from "./components/layout/LeftSideNav";
import Models from "./pages/Models";
import Casting from "./pages/Casting";
import Menu from "./pages/Menu";
import TopBar from "./components/layout/TopBar";
import "./app.css"

const App = () => {
  return (
    <BrowserRouter>

    {/* components which is reuse */}
      
      <div className="layout">

    <div className="topbar">
      <TopBar />
    </div>

    <div className="sidebar">
      <LeftSideNav />
    </div>

    {/* for pages */}

    <div className="content">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Models />} /> 
        <Route path="/casting" element={<Casting />} />
        <Route path="/menu" element={<Menu />} />


        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>

      </div>

    </BrowserRouter>
  );
};

export default App;
