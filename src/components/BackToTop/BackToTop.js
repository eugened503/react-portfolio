import React, { useState } from "react";
import "./BackToTop.css";

function BackToTop() {
  const [back, setback] = useState("");

  const trackScroll = () => {
    const visibilityButton = window.scrollY > 0 ? "back_to_top-show" : ""; //видимость кнопки
    setback(visibilityButton);
  };

  const backToTop = () => {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  };

  window.addEventListener("scroll", trackScroll);

  return (
    <>
      <div className={`${back} back_to_top`} onClick={backToTop}></div>
    </>
  );
}

export default BackToTop;
