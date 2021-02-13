import React from "react";
import "./Education.css";
import text from "./../../images/text.png";
import ExperienceItem from "../ExperienceItem/ExperienceItem";
import FirstColunm from "../FirstColunm/FirstColunm";
import DataEducation from "./../../data/DataEducation/DataEducation";

function Education() {
  return (
    <section className="education" id="education">
      <div className="education__container">
        <FirstColunm
          colunm="Образование"
          colunmDescription="По первому образованию я – педагог, поэтому знаю, какие чудеса и возможности может подарить человеку образование."
          image={text}
        />
        <article className="education__container-item">
          {DataEducation.map((item, index) => {
            return (
              <ExperienceItem
                key={index}
                name={item.name}
                company={item.company}
                date={item.date}
                description={item.description}
              />
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default Education;
