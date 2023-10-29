import React from "react";

function Input({type, placeholder, required, onchange, value, id}) {
  return (
    <>
      <label htmlFor={id}>{placeholder}</label>
      <input
        type={type}
        required={required}
        onChange={onchange}
        value={value}
      />
    </>
  );
}

export default Input;
