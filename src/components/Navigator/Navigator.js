import React from "react";
import "./Navigator.css";

function Navigator(props) {
  //переход по ссылкам
  const anchors = document.querySelectorAll('a[href*="#"]');
  for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute("href").substr(1);
      const yOffset = -40; // не доезжаем 40px
      const element = document.getElementById(blockID);
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  }
  return (
    <ul className={`${props.visibility} navigator__info`}>
      <li className="navigator__info-item">
        <a
          className="navigator__info-link"
          href="#about"
          onClick={props.loadMenu}
        >
          ОБО МНЕ
        </a>
      </li>
      <li className="navigator__info-item">
        <a
          className="navigator__info-link"
          href="#scills"
          onClick={props.loadMenu}
        >
          НАВЫКИ
        </a>
      </li>
      <li className="navigator__info-item">
        <a
          className="navigator__info-link"
          href="#experience"
          onClick={props.loadMenu}
        >
          ОПЫТ
        </a>
      </li>
      <li className="navigator__info-item">
        <a
          className="navigator__info-link"
          href="#education"
          onClick={props.loadMenu}
        >
          ОБРАЗОВАНИЕ
        </a>
      </li>
      <li className="navigator__info-item">
        <a
          className="navigator__info-link"
          href="#portfolio"
          onClick={props.loadMenu}
        >
          ПОРТФОЛИО
        </a>
      </li>
      {/* <li className="navigator__info-item">
        <a
          className="navigator__info-link"
          href="#feedback"
          onClick={props.loadMenu}
        >
          ОТЗЫВЫ
        </a>
      </li> */}
      <li className="navigator__info-item navigator__info-item_right">
        <a
          className="navigator__info-link"
          href="#contact"
          onClick={props.loadMenu}
        >
          КОНТАКТЫ
        </a>
      </li>
    </ul>
  );
}

export default Navigator;
