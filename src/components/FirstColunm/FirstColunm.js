import React from "react";
import "./FirstColunm.css";

function FirstColunm(props) {
  return (
    <article className={`${props.colunmMargin} colunm__container-item`}>
      <div className="colunm__container-couple">
        <h2 className="colunm__name colunm__name_height">
          {props.colunm}
          <span className="header__info-point">.</span>
        </h2>
        <p className="colunm__description">{props.colunmDescription}</p>
      </div>
      <div className="colunm__img">
        <img src={props.image} alt="картинка для раздела" />
      </div>
    </article>
  );
}

export default FirstColunm;
