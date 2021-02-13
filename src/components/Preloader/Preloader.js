import React from "react";
import "./Preloader.css";

function Preloader(props) {
  return (
    <div className="body-preloader">
      <i className={`${props.isSpinner}`}></i>
    </div>
  );
}

export default Preloader;
