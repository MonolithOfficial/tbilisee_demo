import React from "react";

const ChildOption = (props) => {
  const {className, title} = props;
  return (
    <>
       <option value={props.value}>{props.name}</option>
    </>
  );
}

export default ChildOption;