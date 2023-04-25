import { useFormik } from "formik";
import { registerSchemas } from "../../../schemas";
import FormInput from "../../formInput/FormInput";
import { Link } from "react-router-dom";
import axios from "axios";
import { setAuthToken } from "../../../Auth/setAuthToken ";
import "./Registration.css";

const Registration = () => {
  const initialValues = {
    first_name: "",
    last_name: "",
    mobile: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: registerSchemas,
      onSubmit: (values, action) => {
        // console.log("🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",values);
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
    <div className="register-box">
      <div className="register-form-box">
        <div className="register-image-box">
          <img
            // src="https://images.pexels.com/photos/15828302/pexels-photo-15828302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="test-logo"
          />
        </div>
        <div className="register-form">
          <form onSubmit={handleSubmit}>
            <div className="register-header-box">
              <h1>New Registration</h1>
            </div>
            <div className="register-form-block-container">
              <div className="register-form-block-box block-1">
                <FormInput
                  type="text"
                  autoComplete="off"
                  name="first_name"
                  id="first_name"
                  placeholder="First Name"
                  value={values.first_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors.first_name}
                  touched={touched.first_name}
                />
                <FormInput
                  type="number"
                  autoComplete="off"
                  name="mobile"
                  id="mobile"
                  placeholder="Mobile"
                  value={values.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors.mobile}
                  touched={touched.mobile}
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
              <div className="register-form-block-box block-2">
                <FormInput
                  type="name"
                  autoComplete="off"
                  name="name"
                  id="name"
                  placeholder="Last Name"
                />
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
                  type="name"
                  autoComplete="off"
                  name="name"
                  id="name"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className="register-remember-container">
              <div className="register-remember-box">
                <input className="register-all-condition-checkbox" type="checkbox" />
                <span>I have read and agree to the terms of service.</span>
              </div>
              <div className="register-button-box">
                <button className="register-button" type="submit">
                  Register
                </button>
              </div>
              <div className="register-login-box">
                <p className="register-login">
                  Already have an account?
                  <a href=" "><Link to="/">Login</Link></a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
