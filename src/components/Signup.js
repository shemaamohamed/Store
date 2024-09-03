import React, { useEffect, useState } from "react";
import "../Style/SignUp.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [userData, setuserData] = useState();
  useEffect(() => {
   
    // want this to run every time the component is rendered or re-rendered or change happen in local storage
    const triggerChange = setInterval(() => {
      fetch("http://localhost:3002/user")
      .then((res) => res.json())
      .then((products) => {
          setuserData(products);
      })
      
      
    }, 1000);
    return () => {
      // clear the interval for performance and memory and avoid memory leak
      clearInterval(triggerChange);
    };
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const userexist=(form)=>{
    let flag=true;
    userData.map((user) => {
      if(user.email===form.email){
        flag=false;
      }
    })
    if(flag){
      return true;
    }
    else{
      alert("User already exist");
      return false;
    }
  }


  


  const handleSubmit = (e) => {
    e.preventDefault();
    const usernameRegex = /^[a-zA-Z0-9]{3,15}$/;
    if (!usernameRegex.test(formData.name)) {
      alert(
        "Username must be 3-15 characters long and contain only letters and numbers."
      );
    }

    // Email validation: Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
    }

    // Password validation: Must be at least 8 characters
    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters long.");
    }
    if (
      usernameRegex.test(formData.name) &&
      emailRegex.test(formData.email) &&
      formData.password.length >= 8
    ) {

     if(userexist(formData)){
      fetch("http://localhost:3002/user", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      })
        .then((data) => {
          alert("Success");
          navigate("/login");
        })
        .catch((error) => {
          alert("Failed");
        });
     }
    }
  }
    return (
      <>
        <Helmet>
          <title>{` She Brand-Login`}</title>
        </Helmet>
        <div className="signup-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
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
            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>
        </div>
      </>
    );
  };

  


export default SignUp;
