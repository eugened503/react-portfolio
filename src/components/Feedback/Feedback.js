import React from "react";
import "./Feedback.css";
import speachbubble from "./../../images/speachbubble.png";
import ExperienceItem from "../ExperienceItem/ExperienceItem";
import FirstColunm from "../FirstColunm/FirstColunm";
import DataFeedback from "./../../data/DataFeedback/DataFeedback";

function Feedback() {
  function getFoto(str) {
    const createImgTwo = React.createElement("img", {
      src: str,
      className: "feedback__image",
    });
    const createDivTwo = React.createElement(
      "div",
      { className: "feedback__container-img" },
      createImgTwo
    );
    return createDivTwo;
  }
  return (
    <section className="feedback" id="feedback">
      <div className="feedback__container">
        <FirstColunm
          colunm="Отзывы"
          colunmDescription="Отзывы моих постоянных клиентов говорят о качестве моей работы."
          image={speachbubble}
          colunmMargin="colunm__container-item_margin"
        />
        <article className="feedback__container-item">
          {DataFeedback.map((item, index) => {
            return (
              <ExperienceItem
                key={index}
                border={item.border}
                foto={getFoto(item.foto)}
                name={item.name}
                company={item.company}
                marginName={item.marginName}
                marginDescription={item.marginDescription}
                description={item.description}
                marginConpany={item.marginConpany}
              />
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default Feedback;
