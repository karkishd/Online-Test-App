import axios from "axios";
import { useFormik } from "formik";
import { setAuthToken } from "../../../Auth/setAuthToken ";
import { loginSchemas } from "../../../schemas";
import FormInput from "../../formInput/FormInput";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchemas,
      onSubmit: (values, action) => {
        console.log("🚀 ~ file: Login.jsx:14 ~ Login ~ values:", values);
        // Perform login logic here
        axios
          .post("http://localhost:3000/v1/authToken", values)
          .then((response) => {
            const token = response.data.token;
            localStorage.setItem("token", token);
            setAuthToken(token);
            console.log("Form data:", values);
          })
          .catch((err) => console.log(err));

          action.resetForm();
      },
    });

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
          <form onSubmit={handleSubmit}>
            <div className="login-header-box">
              <h1>Sign In</h1>
            </div>
            <div className="login-form-block-box block-1">
            <FormInput
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.email}
              touched={touched.email}
            />
            <FormInput
              type="password"
              autoComplete="off"
              name="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.password}
              touched={touched.password}
            />
            </div>
            <div className="login-remember-forgot-container">
              <div className="login-remember-forgot-box">
                <div className="login-remember-box">
                  <input className="login-remember-checkbox" type="checkbox" />
                  <span>Remember Me</span>
                </div>
                
                <div className="login-forgot-link-box">
                <Link to="/forgot"><a href=" ">Forgot Password?</a></Link>
                </div>
              </div>
              <div className="login-button-box">
                <button className="login-button" type="submit">
                  Login
                </button>
              </div>
              <div className="login-register-box">
                <span className="login-register">
                  Don't have an account?
                  <a href=" "><Link to="/new"> Register Here</Link></a>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
