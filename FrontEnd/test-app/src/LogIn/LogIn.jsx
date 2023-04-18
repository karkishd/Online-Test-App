import "./LogIn.css";

function LogIn() {
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
              <input type="email" />
            </div>
            <div className="login-input-box">
              <label>Password</label>
              <input type="password" />
            </div>
            <div className="login-remember-box">
              <div>
                <input type="checkbox" />
                <span>Remember Me</span>
              </div>
              <a href=" ">Forgot Password?</a>
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
            <p>
              Don't have an account? <a href=" ">Register Here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LogIn;
