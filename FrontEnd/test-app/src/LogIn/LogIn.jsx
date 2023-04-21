import "./LogIn.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function LogIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState(false);
  const [token, setToken] = useState();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitForm = () => {
    console.log({ email, password, login, token });
    if (typeof email === "undefined") {
      console.log("Enter your Email");
    } else if (typeof password === "undefined") {
      console.log("Enter your Password");
    } else {
      console.log("fun");
    }
  };


  return (
    <div className="login-box">
      <div className="login-form-box">
        <div className="login-image-box">
          <img
            // src="https://images.pexels.com/photos/15828302/pexels-photo-15828302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="test-logo"
          />
        </div>
        <div className="login-form">
          <form>
            <div className="login-input-box">
              <label>Email</label>
              <input type="email" onChange={onChangeEmail} />
            </div>
            <div className="login-input-box">
              <label>Password</label>
              <input type="password" onChange={onChangePassword} />
            </div>
            <div className="login-remember-box">
              <div>
                <input type="checkbox" />
                <span>Remember Me</span>
              </div>
              <Link to="/forgot">
                <a href=" ">Forgot Password?</a>
              </Link>
            </div>
            <div>
              <button type="submit" onClick={submitForm}>
                Login
              </button>
            </div>
            <p>
              Don't have an account?
              <Link to="/new">
                <a href=" ">Register Here</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LogIn;
