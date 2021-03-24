import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

export default function TodoElement({ id, text, deteleElement }) {
  return (
    <React.Fragment>
      <div className="note slide-bottom">
        <p className="paragraph">{text}</p>
        <div className="delete-block">
          <button className="delete-btn" onClick={deteleElement}>
            <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
