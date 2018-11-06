import React from "react";
import "./main.css";

const DeveloperPage = () => (
  <div id="LoginForm">
    <div class="container">
      <div class="login-form">
        <div class="main-div">
          <div class="switch">
            <a href="/customerlogin">Not a Developer? Go to Customer-Login</a>
          </div>
          <div class="panel">
            <h2>Developer Login</h2>
            <p>Please enter your username and password</p>
          </div>

          <form id="Login">
            <div class="form-group">
              <input
                required
                type="text"
                class="form-control"
                id="inputDevlogin"
                placeholder="Username"
              />
            </div>
            <div class="form-group">
              <input
                required
                type="password"
                class="form-control"
                id="inputDevPassword"
                placeholder="Password"
              />
            </div>
            <div>
              <div class="forgot">
                {/* {{!-- RESET HTML ROUTE --}} */}
                <a href="">Forgot password?</a>
              </div>
              <div class="signup">
                {/* {{!-- SINGUP HTML ROUTE --}} */}
                <a href="/newdeveloper">New Developer? Signup here!</a>
              </div>
            </div>
            <button type="submit" class="btn btn-primary" id="dev-login">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default DeveloperPage;
