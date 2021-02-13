import React from "react";
import "./ExperienceItem.css";

function ExperienceItem(props) {
  return (
    <>
      <div className={`${props.border} experience__container-couple`}>
        <div className="experience__container-info">
          {props.foto}

          <div className="experience__group">
            <h3 className={`${props.marginName} experience__name`}>
              {props.name}
            </h3>
            <div className="experience__group-mobile">
              <p className={`${props.marginConpany} experience__company`}>
                {props.company}
              </p>
              <p className="experience__date-group">{props.date}</p>
            </div>
          </div>
        </div>
        <p className="experience__date">{props.date}</p>
        <p className={`${props.marginDescription} experience__description`}>
          {props.description}
        </p>
      </div>
    </>
  );
}

export default ExperienceItem;
