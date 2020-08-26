import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

export function EstateCard(props) {
  const history = useHistory();
  const handleClick = () => {
    switch (props.type) {
      case "create estate":
        history.push("/createestate");
        break;
      case "configure":
        history.push("/configureestate");
        break;
      case "handover":
        history.push("/handoverestate");
        break;
      default:
        return;
    }
  };
  function getCardInformationBasedOnType() {
    switch (props.type) {
      case "create hiera":
        return {
          className: "home__content__services__create-hiera-card estate-card",
          displayName: "New Hiera",
          icon: <FontAwesomeIcon icon={icons.faPlus} />,
        };
      case "create estate":
        return {
          className: "home__content__services__create-estate-card estate-card",
          displayName: "New Estate",
          icon: <FontAwesomeIcon icon={icons.faDesktop} />,
        };
      case "configure":
        return {
          className:
            "home__content__services__configure-estate-card estate-card",
          displayName: "Configure Estate",
          icon: <FontAwesomeIcon icon={icons.faCog} />,
        };
      case "handover":
        return {
          className:
            "home__content__services__handover-estate-card estate-card",
          displayName: "Handover Estate",
          icon: <FontAwesomeIcon icon={icons.faKey} />,
        };
      default:
        return "estate-card";
    }
  }
  const cardInformation = getCardInformationBasedOnType();
  return (
    <div className={cardInformation.className} onClick={handleClick}>
      <div className="card-icon">{cardInformation.icon}</div>
      <div className="card-text">{cardInformation.displayName}</div>
    </div>
  );
}
