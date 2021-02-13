import React, { useState } from "react";
import "./Header.css";
import Navigator from "../Navigator/Navigator";
import MobileMenu from "../MobileMenu/MobileMenu";

function Header(props) {
  const [nav, setNav] = useState(""); //тень для шапки при скролле
  const [isItemMenu, setIsItemMenu] = useState("");
  const [isLineFirst, setIsLineFirst] = useState("");
  const [isLineSecond, setIsLineSecond] = useState("");
  const [isLineThird, setIsLineThird] = useState("");
  const [isLineFourth, setIsLineFourth] = useState("");
  const result = isItemMenu === "main-menu_height" ? "" : "main-menu_height";
  const first = isLineFirst === "first_click" ? "" : "first_click";
  const second = isLineSecond === "second_click" ? "" : "second_click";
  const third = isLineThird === "third_click" ? "" : "third_click";
  const fourth = isLineFourth === "fourth_click" ? "" : "fourth_click";
  const background = props.darkBackground === true ? false : true;

  const navAddCls = () => {
    const accessAllowed = window.scrollY > 0 ? "header_box-shadow" : "";
    setNav(accessAllowed);
  };

  function loadMenu() {
    setIsItemMenu(result);
    setIsLineFirst(first);
    setIsLineSecond(second);
    setIsLineThird(third);
    setIsLineFourth(fourth);
    props.handleChangeBackground(background);
  }

  function onOverlay(e) {
    if (e.target.classList.contains("header__section")) {
      loadMenu();
    }
  }

  window.addEventListener("scroll", navAddCls);
  return (
    <section
      className={props.darkBackground ? "header__section" : ""}
      onClick={onOverlay}
    >
      <div
        className={`${nav} header ${
          props.darkBackground ? "header_height" : ""
        }`}
      >
        <div className="header__container">
          <h2 className="header__info-name">
            Portfolio<span className="header__info-point">.</span>
          </h2>
          <Navigator visibility={"navigator__info_visibility"} />
        </div>
        <div className="header__mobile-container">
          <MobileMenu
            visibilityWrapper={"wrapper_visibility"}
            navigatorState={"navigator__info_column"}
            handleChangeBackground={props.handleChangeBackground}
            darkBackground={props.darkBackground}
            isLineFirst={isLineFirst}
            isLineSecond={isLineSecond}
            isLineThird={isLineThird}
            isLineFourth={isLineFourth}
            isItemMenu={isItemMenu}
            loadMenu={loadMenu}
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
