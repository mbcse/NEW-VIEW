import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getUsername = (e) => {
    let str = e.target.value;
    setUsername(str);
  };
  const getPassword = (e) => {
    let str = e.target.value;
    setPassword(str);
  };
  console.log(username);
  console.log(password);

  const login = () => {
    // Configure the ONCLICK
  };

  const login__facebook = () => {
    // Configure the ONCLICK
  };
  const login__google = () => {
    // Configure the ONCLICK
  };
  const login__twitter = () => {
    // Configure the ONCLICK
  };
  const login__github = () => {
    // Configure the ONCLICK
  };
  return (
    <div className="login">
      <div className="login__space">
        <p className="login__header">Login</p>
        <div className="login__components">
          <form>
            <p className="login__line1">Username or Email</p>
            <input
              type="email"
              className="login__input"
              placeholder="Email or Username"
              onChange={getUsername}
              label="email"
              value={username}
            />
            <p className="login__line2">Password</p>
            <input
              value={password}
              label="password"
              type="password"
              className="login__input"
              placeholder="Password"
              onChange={getPassword}
              onClick={login}
            />

            <div className="login__button">
              <Link to="/login">
                <button className="login__submit">Login</button>
              </Link>
              <p>(or)</p>
            </div>
            <div className="login__socialMediaButton">
              <button
                className="loginBtn loginBtn--facebook"
                onClick={login__facebook}
              >
                Facebook
              </button>
              <button
                className="loginBtn loginBtn--google"
                onClick={login__google}
              >
                Google
              </button>
              <button
                className="loginBtn loginBtn--twitter"
                onClick={login__twitter}
              >
                Twitter
              </button>
              <button
                className="loginBtn loginBtn--github"
                onClick={login__github}
              >
                Github
              </button>

              <Link to="/register">
                <div className="login__registerlink">
                  <p>Don't you have an account Register now !!</p>
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
