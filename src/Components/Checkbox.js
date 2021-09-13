import React from "react";

function Checkbox(props) {
  return (
    <>
      
        <input
          type="checkbox" value={props.value} onClick={props.onClick}/>
        <label>
          {props.value}
        </label><br/>
   
    </>
  );
}

export default Checkbox;
