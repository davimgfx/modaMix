import React from "react";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <>
      <div className="label-form">
          <label>{label}</label>
          <input className="input" {...otherProps}/>
      </div>
    </>
  );
};

export default FormInput;
