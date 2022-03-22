import React from 'react'

const FormInput = ({htmlFor, label, type, name, id}) => {
  return (
      <div>
          <label htmlFor={htmlFor}>{label}</label>
          <input type={type} name={name} id={id} />
    </div>
  )
}

export default FormInput