import React, { useState } from "react";
import "./model.css";
import { modelUsers } from "../data/data";

const Models = () => {
  const [activeTab, setActiveTab] = useState("model");

  // Handle tab change
  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  // Filter users based on active tab
  const filterUsers = modelUsers.filter((user) => user.type === activeTab);

  return (
    <div className="model-page">
      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === "model" ? "active" : ""}`}
          onClick={() => handleTab("model")}
          onTouchStart={() => handleTab("model")}
        >
          Model
        </button>

        <button
          className={`tab-btn ${activeTab === "influencer" ? "active" : ""}`}
          onClick={() => handleTab("influencer")}
          onTouchStart={() => handleTab("influencer")}
        >
          Influencer
        </button>

        <button
          className={`tab-btn ${activeTab === "hostess" ? "active" : ""}`}
          onClick={() => handleTab("hostess")}
          onTouchStart={() => handleTab("hostess")}
        >
          Hostess
        </button>
      </div>

      {/* Cards */}
      <div className="cards">
        {filterUsers.map((user) => (
          <div key={user.id} className="card">
            <div className="image-wrapper">
              <img src={user.image} alt={user.name} />
            </div>
            <div className="info">
              <h4>{user.name}</h4>
              <p>{user.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Models;