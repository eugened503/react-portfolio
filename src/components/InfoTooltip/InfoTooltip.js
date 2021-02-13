import React from 'react';

function InfoTooltip(props) {
   const overlayClose = (e) => {
    props.overlayVisible(e);
  };
  return (
    <section className={`popup ${props.isOpen && 'popup_opened'}`}  onClick={overlayClose}>
      <form className="popup__container" >
        <img src={props.logo} alt="логотип регистрации" className="popup__logo" />
        <h2 className="popup__title-reg">{props.title}</h2>
        <button type="button" className="popup__close-button" aria-label="закрыть" onClick={props.onClose}></button>
      </form>
    </section>
  )
}

export default InfoTooltip