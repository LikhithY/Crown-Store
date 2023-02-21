import React, { useState } from "react";
import "./FormInput.scss";

const FormInput = ({ label, errorMessage, ...otherProps }) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="group">
          <input className="form-input" {...otherProps} onBlur={handleFocus} 
          focused={focused.toString()} 
          onFocus={() => otherProps.name === "confirmPassword" && setFocused(true)}  />
          <span className="error">{errorMessage}</span>
    {label && (
        <label className={`${otherProps.value.length ? "shrink" :""} form-input-label`}>{label}</label>
    )} 
    </div>
  );
};

export default FormInput;
