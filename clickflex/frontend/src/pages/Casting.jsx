import React, { useState } from "react";
import "./casting.css";
import { castingData } from "../data/data";
import MyCasting from "./MyCasting";

const Casting = () => {
  const [activeTab, setActiveTab] = useState("casting");

  const filterCastingData = castingData.filter((item) => item.type === activeTab);

  return (
    <div className="casting-page">
  <div className="casting-tabs">
    <button
      className={`casting-tab-btn ${activeTab === "casting" ? "active" : ""}`}
      onClick={() => setActiveTab("casting")}
    >
      Casting
    </button>

    <button
      className={`casting-tab-btn ${activeTab === "mycasting" ? "active" : ""}`}
      onClick={() => setActiveTab("mycasting")}
    >
      My casting
    </button>
  </div>

  {activeTab === "mycasting" ? (
    <MyCasting  />
  ) : (
  <div className="casting-cards">
    {filterCastingData.map((item) => (
      <div key={item.id} className="casting-card">
        
        <div className="casting-img-wrapper">
          <img src={item.image} alt={item.name} />
        </div>

        <div className="casting-info">
          <h2>{item.title}</h2>

          <div className="casting-meta">
            <span>
              <img src="images/castingLocationIcon.png" alt="" />
              {item.location}
            </span>
            <span>
              <img src="images/castingDateIcon.png" alt="" />
              {item.date}
            </span>
          </div>

          <p>
            <img src="images/paymentIcon.png" alt="" />
            {item.category}
          </p>
        </div>

      </div>
    ))}
  </div>
  )}
</div> 
  );
};

export default Casting;