import React, { useState } from "react";
import "./model.css";
import { modelUsers } from "../data/data";

const Models = () => {
  // current tab
  const [activeTab, setActiveTab] = useState("model");
  // filter users based on active tab
  const filterUsers = modelUsers.filter((user) => user.type === activeTab);

  return (
    <div className="model-page">
      {/* tabs */}
      <div className="tabs">
        <span
          className={activeTab === "model" ? "active" : ""}
          onClick={() => setActiveTab("model")}
        >
          Model
        </span>
        <span
          className={activeTab === "influencer" ? "active" : ""}
          onClick={() => setActiveTab("influencer")}
        >
          Influencer
        </span>
        <span
          className={activeTab === "hostess" ? "active" : ""}
          onClick={() => setActiveTab("hostess")}
        >
          Hostess
        </span>
      </div>

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
