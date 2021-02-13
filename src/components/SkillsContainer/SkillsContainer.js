import React from "react";
import "./SkillsContainer.css";

function SkillsContainer(props) {
  return (
    <div className={`${props.skills} skills__container-couple`}>
      <h3 className="skills__name">{props.name}</h3>
      <p className="skills__description">{props.description}</p>
    </div>
  );
}

export default SkillsContainer;
