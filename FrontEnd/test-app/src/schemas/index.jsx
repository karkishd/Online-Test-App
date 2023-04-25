import * as Yup from "yup";

export const loginSchemas = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().min(6).required("Required"),
});

export const registerSchemas = Yup.object({
  first_name: Yup.string().min(2).max(25).required("Required"),
  last_name: Yup.string().min(2).max(25).required("Required"),
  mobile:Yup.number().positive().integer().required('Required'),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().min(6).required("Required"),
  confirm_password: Yup.string().required("Required").oneOf([Yup.ref("password"), null], "Password must match"),
});
