import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false); // initialize with false

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordMatch(event.target.value === repassword); // update passwordMatch state when password changes
  };

  const handleRepasswordChange = (event) => {
    const repasswordValue = event.target.value;
    const passwordMatchValue = repasswordValue === password;
    // Update the state of passwordMatch based on the value entered in the Re-enter your password input
    setPasswordMatch(passwordMatchValue);
    setRepassword(repasswordValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with the username and password, like send it to an API
  };

  return (
    <div className="login-form-container">
      <div>
        <h2 className="McAddy">McAddy</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Welcome!</h2>
          <p className="marginbottom-form">Name</p>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter your name here"
            />
          </div>

          <p className="marginbottom-form">Email Address</p>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email here"
            />
          </div>
          <p className="marginbottom-form">Enter your password</p>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter password here"
            />
          </div>
          <p className="marginbottom-form">Re-enter your password</p>
          <div className={`form-group ${passwordMatch ? "" : "error"}`}>
            <input
              type="password"
              className="form-control"
              value={repassword}
              onChange={handleRepasswordChange}
              placeholder="Enter password here"
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              <a className="white-text">Log in</a>
            </button>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              <a className="white-text">Register </a>
            </button>
          </div>

          <div className="clearfix">
            <label className="float-left form-check-label">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="float-right">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
