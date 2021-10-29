import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import useAuth from "./../../Hooks/useAuth";

const Register = () => {
  const {
    handleRegistration,
    handleNameChange,
    handleEmailChange,
    signInGoogle,
    handlePasswordChange,
    error,
  } = useAuth();

  return (
    <div>
      <div className="d-flex justify-content-center">
        <div>
          <h1 className="text-center login-title">Create an Account</h1>
          <form onSubmit={handleRegistration} className="login-form">
            <div className="lgoin-input-area">
              <label htmlFor="Name">Full Name</label>
              <input
                onBlur={handleNameChange}
                type="text"
                name="name"
                autoComplete="off"
                placeholder="Full Name"
              />
            </div>
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
              Register
            </button>
            <p className="py-3 text-center">
              Already have Account <Link to="/login">Log in</Link>{" "}
            </p>
          </form>
          <button className="google-sginin-button" onClick={signInGoogle}>
            <img
              src="https://i.ibb.co/Jv9Gv9y/btn-google-signin-dark-focus-web-2x.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
