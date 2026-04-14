import React, { useRef, useState } from "react";
import "./bookingtalent.css";
import { FaCheck, FaPlus, FaCalendarAlt } from "react-icons/fa";

const BookingTalent = () => {
  const fileInputRef = useRef(null);

  // 👉 states
  const [fileCount, setFileCount] = useState(0);
  const [files, setFiles] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    requirements: "",
    date: "",
    country: "",
    city: "",
  });

  // 👉 upload click
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // 👉 file change
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    setFileCount(selectedFiles.length);
  };

  // 👉 input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 👉 submit
  const handleSubmit = () => {
    console.log("Form Data:", formData);
    console.log("Files:", files);
  };

  return (
    <div className="booking-page">
      <div className="booking-container">
        <h2 className="booking-title">Booking talent</h2>

        {/* Stepper */}
        <div className="booking-stepper">
          <div className="step active">
            <div className="step-icon"><FaCheck /></div>
            <span>Basic info</span>
          </div>
          <div className="step-line"></div>
          <div className="step">
            <div className="step-icon"><FaCheck /></div>
            <span>Model request</span>
          </div>
        </div>

        <div className="form-content">

          {/* Upload */}
          <div className="upload-box" onClick={handleUploadClick}>
            <div className="plus-icon"><FaPlus /></div>

            {fileCount > 0 && (
              <div className="file-count">
                {fileCount} file(s) uploaded
              </div>
            )}

            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              multiple
              onChange={handleFileChange}
            />
          </div>

          {/* Inputs */}
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
          />

          <input
            type="text"
            name="requirements"
            placeholder="Requirements"
            value={formData.requirements}
            onChange={handleChange}
          />

          {/* Date with icon */}
          <div className="input-wrapper">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            <FaCalendarAlt className="calendar-icon" />
          </div>

          <select name="country" onChange={handleChange}>
            <option value="">Country</option>
            <option value="Pakistan">Pakistan</option>
          </select>

          <select name="city" onChange={handleChange}>
            <option value="">City</option>
            <option value="Peshawar">Peshawar</option>
          </select>

          {/* Submit */}
          <button className="next-btn" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingTalent;