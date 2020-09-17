import React from "react";

const Input = (props) => {
  const {type, id, placeholder, className} = props;
  return (
    <>
        <input 
            type={type}
            id={id}
            placeholder={placeholder}
            className={className}
        />
    </>
  );
}

export default Input;