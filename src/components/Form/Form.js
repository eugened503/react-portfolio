import React from "react";
import "./Form.css";
import emailjs from "emailjs-com";

function Form(props) {
  const renderLoading = (isLoading) => {
    props.handleSpinner(isLoading);
  };

  function sendEmail(e) {
    e.preventDefault();
    renderLoading(true);

    const buttonDisabled = document.querySelector(".contact__info-button");
    buttonDisabled.disabled = true; //блокируем кнопку формы

    emailjs
      .sendForm(
        "gmail",
        "template_9e7uhue",
        e.target,
        "user_7g3Evy4Cy9178kHGSFQ3v"
      )
      .then(
        (result) => {
          console.log(result.text);
          buttonDisabled.disabled = false; //разблокируем форму
          props.handleSetInfoTooltip();
        },
        (error) => {
          console.log(error.text);
          buttonDisabled.disabled = false; //разблокируем форму
          props.handleSetInfoTooltipMistake();
        }
      )
      .finally(() => {
        renderLoading(false);
      });
    e.target.reset();
  }

  return (
    <form className="form__container" onSubmit={sendEmail}>
      <input
        type="text"
        placeholder="Subject"
        className="contact__subject"
        name="subject"
      />
      <div className="contact__info-group">
        <input
          type="text"
          className="contact__info-item"
          placeholder="Name"
          name="name"
          required
        />
        <input
          type="email"
          className="contact__info-item"
          placeholder="Email"
          name="email"
          required
        />
      </div>
      <div className="contact__message-group">
        <textarea
          className="contact__info-message"
          placeholder="Message"
          name="message"
          required
        ></textarea>
        <button
          type="submit"
          className="button__container-item button__container-item_color contact__info-button"
        >
          SEND MESSAGE
        </button>
      </div>
    </form>
  );
}

export default Form;
