import React from "react";
import logo from "../../images/Union.svg";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function InfoTooltipManage(props) {
    
  return (
    <InfoTooltip
      isOpen={props.isOpen}
      onClose={props.onClose}
      title="Ваше письмо успешно отправлено!"
      logo={logo}
      overlayVisible={props.overlayVisible}
    ></InfoTooltip>
  );
}

export default InfoTooltipManage;
