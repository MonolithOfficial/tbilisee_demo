import React from "react";

const Button = (props) => {
  const {className, title} = props;
  return (
    <>
        <a className={className}
           href="*"
        >
            {title}
        </a>
    </>
  );
}

export default Button;