import React, { useRef, useState } from "react";
import "./bookingtalent.css";
import { FaCheck, FaPlus, FaCalendarAlt } from "react-icons/fa";

const BookingTalent = () => {
  const fileInputRef = useRef(null);
  const dateInputRef = useRef(null);

  const [currentStep, setCurrentStep] = useState(1);
  const [fileCount, setFileCount] = useState(0);
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    title: "",
    requirements: "",
    date: "",
    country: "",
    city: "",
    gender: "",
    ethnicity: "",
    heightFrom: "",
    heightTo: "",
    ageFrom: "",
    ageTo: "",
  });

  // ✅ Arrays (Professional way)
  const countries = ["Pakistan", "UAE", "UK"];
  const cities = ["Peshawar", "Karachi", "Lahore"];
  const genders = ["Male", "Female", "Other"];

  const handleUploadClick = () => fileInputRef.current.click();

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    setFileCount(selectedFiles.length);
    if (errors.files) {
      setErrors((prev) => ({ ...prev, files: "" }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCalendarClick = () => {
    try {
      dateInputRef.current.showPicker();
    } catch {
      dateInputRef.current.focus();
    }
  };

  // ✅ ENGLISH VALIDATION
  const validate = () => {
    const newErrors = {};

    if (files.length === 0) {
      newErrors.files = "Please upload at least one file";
    }

    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.requirements.trim())
      newErrors.requirements = "Requirements are required";
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.country) newErrors.country = "Please select a country";
    if (!formData.city) newErrors.city = "Please select a city";

    return newErrors;
  };

  const handleNext = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setCurrentStep(2);
  };

  const handleSubmit = () => {
    console.log("FINAL DATA:", formData);
    console.log("FILES:", files);
  };

  return (
    <div className="booking-page">
      <div className="booking-container">
        <h2 className="booking-title">Booking talent</h2>

        {/* Stepper */}
        <div className="booking-stepper">
          <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
            <div className="step-icon">
              <FaCheck />
            </div>
            <span>Basic info</span>
          </div>
          <div className="step-line"></div>
          <div className={`step ${currentStep === 2 ? "active" : ""}`}>
            <div className="step-icon">
              <FaCheck />
            </div>
            <span>Model request</span>
          </div>
        </div>

        {/* STEP 1 */}
        {currentStep === 1 && (
          <div className="form-content">
            <div
              className={`upload-box ${errors.files ? "error" : ""}`}
              onClick={handleUploadClick}
            >
              <FaPlus />
              <span>
                {fileCount > 0 ? `${fileCount} files selected` : "Upload files"}
              </span>

              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                multiple
                onChange={handleFileChange}
              />
            </div>
            {errors.files && <span className="err-msg">{errors.files}</span>}

            <input name="title" placeholder="Title" onChange={handleChange} />
            <input
              name="requirements"
              placeholder="Requirements"
              onChange={handleChange}
            />

            <div className="input-wrapper">
              <input
                type="date"
                name="date"
                ref={dateInputRef}
                onChange={handleChange}
              />
              <FaCalendarAlt
                className="calendar-icon"
                onClick={handleCalendarClick}
              />
            </div>

            <select name="country" onChange={handleChange}>
              <option value="">Country</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <select name="city" onChange={handleChange}>
              <option value="">City</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <button className="next-btn" onClick={handleNext}>
              Next
            </button>
          </div>
        )}

        {/* STEP 2 (IMAGE MATCH) */}
        {currentStep === 2 && (
          <div className="form-content">
            <select name="gender" onChange={handleChange}>
              <option value="">Gender</option>
              {genders.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>

            <input
              name="ethnicity"
              placeholder="Ethnicity"
              onChange={handleChange}
            />

            {/* HEIGHT */}
            <div className="row">
              <div>
                <label>Height from</label>
                <input
                  name="heightFrom"
                  placeholder="160 cm"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Height to</label>
                <input
                  name="heightTo"
                  placeholder="190 cm"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* AGE */}
            <div className="row">
              <div>
                <label>Age from</label>
                <input
                  name="ageFrom"
                  placeholder="23 years"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Age to</label>
                <input
                  name="ageTo"
                  placeholder="30 years"
                  onChange={handleChange}
                />
              </div>
            </div>

            <button className="next-btn" onClick={handleSubmit}>
              Book Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingTalent;
