import React from "react";
import './Popup.css'

function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
          <h2>It's about time:</h2>
          <h3>{props.alertReminder.reminder}</h3>
          <h4>{props.alertReminder.date}</h4>
        <button className="close-btn" onClick={() => props.setTrigger()}>close</button>
        {props.children}
      </div>
    </div>
  ): "" ;
}

export default Popup;
