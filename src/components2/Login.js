import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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
          <h2>Log in</h2>
          <p className="marginbottom-form">Email Address</p>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={handleUsernameChange}
              placeholder="Enter your email here"
            />
          </div>
          <p className="marginbottom-form">Password</p>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={handlePasswordChange}
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
              <a className="white-text"> Register</a>
            </button>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              <a className="white-text"> random button </a>
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
export default Login;
