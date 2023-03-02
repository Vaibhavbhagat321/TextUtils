import React from "react";

function Alert(props) {
  return (

    <div style={{height: "50px"}}>
    {props.alert && <>
      <div
        className={`alert alert-${props.alert.type} d-flex align-items-center`}
        role="alert"
        style={{height: "40px"}}
      >
        <div><b>{props.alert.type}: </b>{props.alert.message}</div>
      </div>
      </>}
    </div>
  );
}

export default Alert;
