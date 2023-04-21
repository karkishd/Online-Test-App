import "./ForgotPassword.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState();

  const onChangeEmail = (e)=>{
    setEmail(e.target.value)
  }
  
  return (
    <div className="forgot-box">
      <div className="forgot-form-box">
        <div className="forgot-image-box single-box">
          <img
            // src="https://images.pexels.com/photos/15828302/pexels-photo-15828302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="test-logo"
          />
        </div>
        <div className="forgot-form">
          <div className="forgot-input-box single-box">
            <label>Email</label>
            <input type="email" onChange={onChangeEmail}/>
          </div>
          <button className="forgot-reset-button button" type="submit">
            Reset Password
          </button>
          <Link to="/">
            <button className="forgot-goback-button button" type="submit">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
