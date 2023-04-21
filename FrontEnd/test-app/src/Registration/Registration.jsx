import "./Registration.css";
import { Link } from "react-router-dom";

function Registration() {
  return (
    <div className="register-box">
      <div className="register-form-box">
        <div className="register-image-box">
          <img
            // src="https://images.pexels.com/photos/15828302/pexels-photo-15828302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="test-logo"
          />
        </div>
        <div className="register-form">
          <form>
            <div className="register-form-container">
              <div className="register-form-box1">
                <div className="register-input-box">
                  <label>First Name</label>
                  <input type="text" />
                </div>
                <div className="register-input-box">
                  <label>Mobile</label>
                  <input type="text" />
                </div>
                <div className="register-input-box">
                  <label>Password</label>
                  <input type="password" />
                </div>
              </div>
              <div className="register-form-box2">
                <div className="register-input-box">
                  <label>Last Name</label>
                  <input type="text" />
                </div>
                <div className="register-input-box">
                  <label>Email</label>
                  <input type="email" />
                </div>
                <div className="register-input-box">
                  <label>Re-Password</label>
                  <input type="password" />
                </div>
              </div>
            </div>
            <div className="register-remember-box">
              <div>
                <input type="checkbox" />
                <span>I have read and agree to the terms of service.</span>
              </div>
            </div>
            <div>
              <button type="submit">Register</button>
            </div>
            <p>
              Already have an account?
              <Link to="/">
                <a href=" ">Login</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Registration;
