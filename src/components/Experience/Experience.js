import React from "react";
import "./Experience.css";
import gears from "./../../images/gears.png";
import ExperienceItem from "../ExperienceItem/ExperienceItem";
import FirstColunm from "../FirstColunm/FirstColunm";
import DataExperince from "./../../data/DataExperince/DataExperince";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience__container">
        <FirstColunm
          colunm="Опыт"
          colunmDescription="Мне нравится получать новый практический опыт, который может быть полезен другим людям."
          image={gears}
        />
        <article className="experience__container-item">
          {DataExperince.map((item, index) => {
            return (
              <ExperienceItem
                key={index}
                border={item.border}
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

export default Experience;
