import React from "react";
import "./MobileMenu.css";
import Navigator from "../Navigator/Navigator";

function MobileMenu(props) {
  return (
    <div className={`${props.visibilityWrapper} wrapper`}>
      <h2 className="wrapper__info-name">
        Danny<span className="header__info-point">.</span>
      </h2>
      <label
        htmlFor="check-menu"
        className="wrapper__label"
        onClick={props.loadMenu}
      ></label>
      <div className={`${props.isLineFirst} burger-line first`}></div>
      <div className={`${props.isLineSecond} burger-line second`}></div>
      <div className={`${props.isLineThird} burger-line third`}></div>
      <div className={`${props.isLineFourth} burger-line fourth`}></div>
      <div className={`${props.isItemMenu} main-menu`}>
        <Navigator
          visibility={props.navigatorState}
          loadMenu={props.loadMenu}
        />
      </div>
    </div>
  );
}

export default MobileMenu;
