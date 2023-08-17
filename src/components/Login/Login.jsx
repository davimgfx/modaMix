import { Close } from "@mui/icons-material";
import React from "react";
import FormInput from "../FormInput/FormInput";
import "./Login.scss";
import google_icon from "../../assets/images/google_icon.png"
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <section id="login">
      <div className="login-container">
        <div className="login-div">
          <div className="login-header">
            <h2>Login</h2>
            <Close
              sx={{
                cursor: "pointer",
                color: "#353535",
              }}
            />
          </div>
          <p>Enter your credentials to acess your account</p>
          <div className="bars" />
          <form className="form-login">
            <FormInput
              label="Email"
              type="email"
              required
              //onChange={handleChange}
              name="email"
              //value={email}
            />
            <FormInput
              label="Password"
              type="password"
              required
              //onChange={handleChange}
              name="password"
              //value={password}
            />
          </form>{" "}
          <div className="form-buttons">
            <button className="button-submit button">Submit</button>
            <p>or</p>
            <button className="button-google button">
              <img
                src={google_icon}
                alt="google_icon"
                className="google_image"
              />
              Login with Google
            </button>
          </div>
        </div>
        <div className="create-account">
          <p>Create an account <Link to="/createAccount">Sign Up</Link></p>
        </div>
        <div className="account-test">
          <p>Test Account: test@gmail.com/testpassword</p>
        </div>
      </div>
    </section>
  );
};

export default Login;
