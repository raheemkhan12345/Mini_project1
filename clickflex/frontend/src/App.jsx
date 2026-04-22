import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import LeftSideNav from "./components/layout/LeftSideNav";
import Models from "./pages/Models";
import Casting from "./pages/Casting";
import Menu from "./pages/Menu";
import TopBar from "./components/layout/TopBar";
import BookingTalent from "./pages/BookingTalent";
import MyCasting from "./pages/MyCasting";
import "./app.css";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideTopBar = location.pathname === "/booking" || location.pathname.startsWith("/mycasting");

  return (
    <div className="layout">
      {/* Sidebar - Fixed Left */}
      <aside className="sidebar">
        <LeftSideNav />
      </aside>

      {/* Main Wrapper - Dynamic Right Area */}
      <main className="main-wrapper">
        {!hideTopBar && (
          <header className="topbar">
            <TopBar />
          </header>
        )}
        
        {/* Pages Content */}
        <section className="content">
          {children}
        </section>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<Models />} />
          <Route path="/casting" element={<Casting />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/mycasting/:id" element={<MyCasting />} />
          <Route path="/booking" element={<BookingTalent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;