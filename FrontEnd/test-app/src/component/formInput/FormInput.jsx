import "./FormInput.css";

const FormInput = ({
  type,
  placeholder,
  errors,
  touched,
  autoComplete,
  name,
  id,
  value,
  onChange,
  onBlur,
}) => {
  
  return (
    <div className="form-input-box">
      {/* <label>{props.placeholder}</label> */}
      <input
        className="form-input"
        placeholder={placeholder}
        type={type}
        autoComplete={autoComplete}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        id={id}
      />
      {errors && touched ? <p className="form-error">{errors}</p> : null}
    </div>
  );
};

export default FormInput;
