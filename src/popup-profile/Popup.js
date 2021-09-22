import React from "react";
import './style.css';
 
const Popup = props => {
  return (
    <div className="p-popup-box">
      <div className="p-box" onClick={props.handleClose} >
        {/* <span className="close-icon" onClick={props.handleClose}>x</span> */}
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;