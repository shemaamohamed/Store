import React, { useState } from "react";
import "../Style/SignUp.css";
import { useNavigate } from "react-router-dom";
import "../Style/card.css";
import { Helmet } from "react-helmet";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleLogin = () => {
    window.localStorage.setItem("isLogin", true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Password validation
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setError(null);
    setLoading(true);

    // Fetch user data
    fetch(`http://localhost:3002/user`)
      .then((res) => res.json())
      .then((users) => {
        setLoading(false);
        checkUser(users);
      })
      .catch((error) => {
        setLoading(false);
        setError("Login failed. Please try again.");
      });
  };

  const checkUser = (users) => {
    const userExists = users.some(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (userExists) {
      handleLogin(); // set isLogin to true
      setFormData({ email: "", password: "" });
      setLoading(true);
      navigate("/content");
    } else {
      setError("Incorrect email or password.");
    }
  };

  return (
    <>
      <Helmet>
        <title>{` She Brand-Login`}</title>
      </Helmet>
      <div className="signup-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="signup-btn" disabled={loading}>
            Login
            {loading && (
              <div className="dot-spinner">
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
              </div>
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
