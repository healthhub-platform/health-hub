import React from "react";
import { Link } from "react-router-dom";
import './LoginForm.css' 
const LoginForm = ({ isShowLogin }) => {
  return (
    <div className={`${isShowLogin ? "active" : ""} show`}>
      <div className="login-form">
        <div className="form-box solid">
          <form>
            <h1 className="login-text">Sign In</h1>
            <label>Username</label>
            <br></br>
            <input type="text" name="username" className="login-box" />
            <br></br>
            <label>Password</label>
            <br></br>
            <input type="password" name="password" className="login-box" />
            <br></br>
            <input type="submit" value="LOGIN" className="login-btn" />
            <br></br>
            {/* <p>Need to sign up? Click <Link to="/RegisterAccount"> </Link> </p> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;