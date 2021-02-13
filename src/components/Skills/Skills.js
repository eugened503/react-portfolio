import React from "react";
import "./Skills.css";
import lightbulbon from "./../../images/lightbulbon_96.png";
import FirstColunm from "../FirstColunm/FirstColunm";
import SkillsContainer from "../SkillsContainer/SkillsContainer";
import DataSkills from "./../../data/DataSkills/DataSkills";

function Skills() {
  return (
    <section className="skills" id="scills">
      <div className="skills__container">
        <FirstColunm
          colunm="Навыки"
          colunmDescription="Мне нравится узнавать что-то новое в веб-разработке и применять это в реальной практике."
          image={lightbulbon}
        />
        <article className="skills__container-item">
          {DataSkills.slice(0, 2).map((item, index) => {
            return (
              <SkillsContainer
                key={index}
                name={item.name}
                description={item.description}
                skills={item.skills}
              />
            );
          })}
        </article>
        <article className="skills__container-item">
          {DataSkills.slice(2, 4).map((item, index) => {
            return (
              <SkillsContainer
                key={index}
                name={item.name}
                description={item.description}
                skills={item.skills}
              />
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default Skills;
