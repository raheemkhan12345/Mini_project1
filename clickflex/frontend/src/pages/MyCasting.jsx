import React from "react";
import "./mycasting.css";
import { myCastingData } from "../data/data";

const MyCasting = () => {
  const data = myCastingData[0];

  return (
    <div className="mycasting-page">
      <div className="mycasting-container">
        {/* left image */}
        <div className="mycasting-left">
          <img src={data.image} alt="" />
        </div>

        {/* right content */}
        <div className="mycasting-right">
          <h2>{data.title}</h2>

          {/* meta */}
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

          {/* requirements */}
          <div className="requirements-box">
            <h3>Requirements</h3>
            <p>{data.requirements}</p>
          </div>

          {/* preferences */}
          <div className="preferences">
            <h3>Preference</h3>

            <div className="pref-item">
              <h4>Gender</h4>
              <p>{data.preference.gender}</p>
            </div>

            <div className="pref-item">
              <h4>Ethnicity</h4>
              <p>{data.preference.ethnicity}</p>
            </div>

            <div className="pref-item">
              <h4>Age</h4>
              <p>{data.preference.age}</p>
            </div>

            <div className="pref-item">
              <h4>Height</h4>
              <p>{data.preference.height}</p>
            </div>
          </div>

          <div className="apply-btn-wrapper">
            <button className="apply-btn">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCasting;
