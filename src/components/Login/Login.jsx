import React from "react";
import "./Login.scss";
import FormInput from "../FormInput/FormInput";
const Login = () => {
  return (
    <section id="login">
      <div className="login-container">
        <div className="login-div">
          <h2>Login</h2>
          <h2>Enter your credentials to acess your account</h2>
          <div className="bars" />
          <form className="form-login">
            <FormInput label="Email"
            type="email"
            required
            //onChange={handleChange}
            name="email"
            //value={email}
            />
            <FormInput label="Password"
            type="password"
            required
            //onChange={handleChange}
            name="password"
            //value={password}
            />
            <div>
              <button>Submit</button>
              <button>Login with Google</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
