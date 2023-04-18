import "./ForgotPassword.css"

function ForgotPassword() {
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
            <input type="email" />
          </div>
          <button className="forgot-reset-button button" type="submit">Reset Password</button>
          <button className="forgot-goback-button button" type="submit">Go Back</button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
