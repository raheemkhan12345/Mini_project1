import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./casting.css";
import { castingData } from "../data/data";

const Casting = () => {
  const [activeTab, setActiveTab] = useState("casting");
  const navigate = useNavigate();

  const filterCastingData = castingData.filter((item) => item.type === activeTab);

  return (
    <div className="casting-page">
      {/* Tab Navigation */}
      <div className="casting-tabs">
        <button
          className={`casting-tab-btn ${activeTab === "casting" ? "active" : ""}`}
          onClick={() => setActiveTab("casting")}
        > Casting </button>
        <button
          className={`casting-tab-btn ${activeTab === "mycasting" ? "active" : ""}`}
          onClick={() => setActiveTab("mycasting")}
        > My casting </button>
      </div>

      {/* Cards Grid */}
      <div className="casting-cards">
        {filterCastingData.map((item) => (
          <div 
            key={item.id} 
            className="casting-card"
            onClick={() => navigate(`/mycasting/${item.id}`)}
          >
            <div className="casting-img-wrapper">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="casting-info">
              <h2>{item.title}</h2>
              <div className="casting-meta">
                <span>
                  <img src="images/castingLocationIcon.png" alt="loc" />
                  {item.location}
                </span>
                <span>
                  <img src="images/castingDateIcon.png" alt="date" />
                  {item.date}
                </span>
              </div>
              <p className="casting-category">
                <img src="images/paymentIcon.png" alt="pay" />
                {item.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div> 
  );
};

export default Casting;