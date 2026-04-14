import React from "react";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom"

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import LeftSideNav from "./components/layout/LeftSideNav";
import Models from "./pages/Models";
import Casting from "./pages/Casting";
import Menu from "./pages/Menu";
import TopBar from "./components/layout/TopBar";
import "./app.css"
import BookingTalent from "./pages/BookingTalent";
import MyCasting from "./pages/MyCasting";

// for seperate layout component
const Layout = ({ children }) => {
  const location = useLocation();
  // topbar hide on booking talent page
  const hideTopBar = location.pathname === "/booking";
  return (
    <div className="layout">
      {!hideTopBar && (
      <div className="topbar">
        <TopBar />
      </div>
      )}

      <div className="sidebar">
        <LeftSideNav />
      </div>

      <div className="content">
        {children}
      </div>

    </div>
  )
}


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<Models />} />
          <Route path="/casting" element={<Casting />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/mycasting" element={<MyCasting />} />
          <Route path="/booking" element={<BookingTalent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
