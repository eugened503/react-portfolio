import React from "react";
import logo from "../../images/mistake.svg";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function InfoTooltipMistake(props) {
  return (
    <InfoTooltip
      isOpen={props.isOpen}
      onClose={props.onClose}
      title="Что-то пошло не так!
        Попробуйте ещё раз."
      logo={logo}
      overlayVisible={props.overlayVisible}
    ></InfoTooltip>
  );
}

export default InfoTooltipMistake;
