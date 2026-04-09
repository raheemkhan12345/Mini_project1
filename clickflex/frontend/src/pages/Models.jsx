import React, { useState } from "react";
import "./model.css";
import { modelUsers } from "../data/data";

const Models = () => {
  const [activeTab, setActiveTab] = useState("model");
  const tabs = ["model", "influencer", "hostess"];

  // Filter users based on active tab
  const filterUsers = modelUsers.filter((user) => user.type === activeTab);

  return (
    <div className="model-page">
      {/* Tabs */}
      <div className="tabs">
        {tabs.map((type) => (
          <button
            key={type}
            className={`tab-btn ${activeTab === type ? "active" : ""}`}
            onClick={() => setActiveTab(type)}
            onTouchStart={() => setActiveTab(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
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