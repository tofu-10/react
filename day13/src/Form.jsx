import { useState } from "react";
function Tik() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", number: "" });
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const phoneRegex = /^\d{10}$/;

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required";
        } else if (value.trim().length < 2) {
          error = "Name must be at least 2 characters";
        }
        break;
      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!emailRegex.test(value)) {
          error = "Please enter a valid email";
        }
        break;
      case "number":
        if (!value.trim()) {
          error = "Phone number is required";
        } else if (!phoneRegex.test(value)) {
          error = "Please enter a valid 10-digit phone number";
        }
        break;
      default:
        break;
    }

    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    const newErrors = {
      ...errors,
      [name]: error,
    };

    const nameError =
      name === "name" ? error : validateField("name", userDetails.name);
    const emailError =
      name === "email" ? error : validateField("email", userDetails.email);
    const numberError =
      name === "number" ? error : validateField("number", userDetails.number);

    const allValid =
      !nameError &&
      !emailError &&
      !numberError &&
      userDetails.name &&
      userDetails.email &&
      userDetails.number;

    setIsValid(allValid);
  };

  const mockApiCall = () => {
    return new Promise((resolve) => {
      const startTime = Date.now();
      setTimeout(() => {
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        resolve({
          success: true,
          message: "Form submitted successfully!",
          responseTime: responseTime,
        });
      }, 2000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValid) return;

    setIsLoading(true);

    try {
      const response = await mockApiCall();
      console.log("API Response:", response);
      console.log("Response Time:", response.responseTime + "ms");
      setIsSubmitted(true);

      setTimeout(() => {
        setUserDetails({ name: "", email: "", number: "" });
        setErrors({ name: "", email: "", number: "" });
        setIsValid(false);
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h2 className="form-title">Contact Information</h2>

        {isSubmitted && (
          <div className="success-message">✅ Form submitted successfully!</div>
        )}

        <form onSubmit={handleSubmit} className="glass-form">
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={userDetails.name}
              onChange={handleInputChange}
              className={`form-input ${errors.name ? "error" : ""}`}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={userDetails.email}
              onChange={handleInputChange}
              className={`form-input ${errors.email ? "error" : ""}`}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="input-group">
            <input
              type="tel"
              name="number"
              placeholder="Enter phone number"
              value={userDetails.number}
              onChange={handleInputChange}
              className={`form-input ${errors.number ? "error" : ""}`}
            />
            {errors.number && (
              <span className="error-text">{errors.number}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={!isValid || isLoading}
            className={`submit-btn ${
              isValid && !isLoading ? "enabled" : "disabled"
            }`}
          >
            {isLoading ? (
              <div className="loading-content">
                <div className="spinner"></div>
                <span>Submitting...</span>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
export default Tik;
