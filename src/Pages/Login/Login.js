import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./Login.css";
import useAuth from "./../../Hooks/useAuth";

const Login = () => {
  const {
    signInGoogle,
    handleLogIn,
    handleEmailChange,
    handlePasswordChange,
    error,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogIn = () => {
    signInGoogle()
      .then((result) => {
        history.push(redirect_uri);
        // setUser(result.user);
      })
      .catch((error) => {
        // setError(error.message);
      });
  };
  return (
    <div className="d-flex justify-content-center">
      <div>
        <h1 className="text-center login-title">Login</h1>
        <form onSubmit={handleLogIn} className="login-form">
          <div className="lgoin-input-area">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailChange}
              type="email"
              name="email"
              autoComplete="off"
              placeholder="email@example.com"
              required
            />
          </div>
          <div className="lgoin-input-area">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordChange}
              type="password"
              name="password"
              required
            />
          </div>
          <div className="text-danger">{error}</div>
          <button className="login-button" type="submit">
            Login
          </button>

          <p className="py-3 text-center">
            New on Denta Clinik? Please <Link to="/register">Register</Link>{" "}
          </p>
        </form>
        <button className="google-sginin-button" onClick={handleGoogleLogIn}>
          <img
            src="https://i.ibb.co/Jv9Gv9y/btn-google-signin-dark-focus-web-2x.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Login;
