import React from "react";

const Checkbox = ({ htmlFor, label, type, name, id, onChange, checked }) => {
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        checked={checked}
        required
      />
    </div>
  );
};

export default Checkbox;
