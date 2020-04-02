import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function FloatingButton() {

  function addmeeting(){
    let nickname=window.location.search.substring(1, window.location.search.length);   
    window.location.replace("registerMeeting?"+nickname);
  }

  return (
    <div id="float-button">
        <div id="button-new-meet">
          <img
            src="https://i.imgur.com/kJUAAPS.png"
            alt="Nova Reunião"
            id="newMeetImg"
            onClick={addmeeting}
          />
        </div>
    </div>
  );
}

export default FloatingButton;

