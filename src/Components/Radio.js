import React from "react";

const Radio = (props) => {
  return (
    <>
      
        <input type="radio" name="radio" value={props.value} onClick={props.onClick}/>
        <label>{props.gender}</label>
        <br />
      
    </>
  );
};
export default Radio;
