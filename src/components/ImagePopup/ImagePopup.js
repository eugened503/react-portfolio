import React from "react";
import "./ImagePopup.css";

function ImagePopup(props) {
  const overlayClose = (e) => {
    props.overlayVisible(e);
  };
  return (
    <section
      className={`popup ${props.isOpen && "popup_opened"}`}
      onClick={overlayClose}
    >
      <form
        className="popup__container-enlargement"
        name="container"
        method="post"
        action="#"
      >
        <div className="about__project">
          <h1 className="about__project-title">
            {props.card.title}
            <span className="header__info-point">.</span>
          </h1>
          <div className="about__info-contacts about__info-contacts_margin">
            <ul className="about__key">
              <li className="about__key-item">DATE</li>
              <li className="about__key-item">STACK</li>
            </ul>
            <ul className="about__value">
              <li className="about__value-item">{props.card.date}</li>
              <li className="about__value-item">{props.card.stack}</li>
            </ul>
          </div>
          <p className="popup__info-subtitle">{props.card.description}</p>
        </div>
        <img
          src={props.card.image}
          alt="ваше фото"
          className="popup__img-enlargement"
        />
        <button
          type="button"
          className="popup__close-button popup__close-button-enlargement"
          aria-label="закрыть"
          onClick={props.onClose}
        ></button>
        <div className="popup__container-button">
          {props.card.category !== "back-end" ? (
            <>
              <a
                href={props.card.link_project}
                className="link-button"
                rel="noreferrer"
                target="_blank"
              >
                Посмотреть проект
              </a>
              <a
                href={props.card.link_code}
                className="link-button link-button_color"
                rel="noreferrer"
                target="_blank"
              >
                Посмотреть код
              </a>
            </>
          ) : (
            <a
              href={props.card.link_code}
              className="link-button_position link-button link-button_color"
              rel="noreferrer"
              target="_blank"
            >
              Посмотреть код
            </a>
          )}
        </div>
      </form>
    </section>
  );
}

export default ImagePopup;
