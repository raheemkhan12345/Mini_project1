import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./mycasting.css";
import { castingData } from "../data/data"; 

const MyCasting = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  // URL ID ke mutabik data find karna
  const data = castingData.find((item) => item.id === parseInt(id));

  if (!data) {
    return (
      <div className="mycasting-page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ color: '#fff' }}>Casting not found!</h2>
        <button className="apply-btn" onClick={() => navigate("/casting")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="mycasting-page">
      {/* Back Navigation - Because TopBar is hidden */}
      <div className="mycasting-nav">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <span>←</span> Back
        </button>
      </div>

      <div className="mycasting-container">
        {/* Left Side: Image */}
        <div className="mycasting-left">
          <img 
            src={data.image.startsWith('/') ? data.image : `/${data.image}`} 
            alt={data.title} 
          />
        </div>

        {/* Right Side: Details */}
        <div className="mycasting-right">
          <h2>{data.title}</h2>

          <div className="mycasting-meta">
            <span>
              <img src="/images/castingLocationIcon.png" alt="" />
              {data.location}
            </span>
            <span>
              <img src="/images/castingDateIcon.png" alt="" />
              {data.date}
            </span>
            <span>
              <img src="/images/paymentIcon.png" alt="" />
              {data.category}
            </span>
          </div>

          <div className="requirements-box">
            <h3>Requirements</h3>
            <p>{data.requirements || "No specific requirements mentioned."}</p>
          </div>

          <div className="preferences">
            <h3>Preference</h3>
            <div className="pref-grid">
              <div className="pref-item">
                <h4>Gender</h4>
                <p>{data.preference?.gender || "N/A"}</p>
              </div>
              <div className="pref-item">
                <h4>Ethnicity</h4>
                <p>{data.preference?.ethnicity || "N/A"}</p>
              </div>
              <div className="pref-item">
                <h4>Age</h4>
                <p>{data.preference?.age || "N/A"}</p>
              </div>
              <div className="pref-item">
                <h4>Height</h4>
                <p>{data.preference?.height || "N/A"}</p>
              </div>
            </div>
          </div>

          <div className="apply-btn-wrapper">
            <button className="apply-btn" onClick={() => navigate("/booking")}>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCasting;