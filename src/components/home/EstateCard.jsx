import React from "react";
import { useHistory } from "react-router-dom";

export function EstateCard(props) {
  const history = useHistory();
  const handleClick = () => {
    switch (props.type) {
      case "create":
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
  function getClassAndDisplayNameBasedOnType() {
    switch (props.type) {
      case "create hiera":
        return {
          className: "home__content__services__create-hiera-card estate-card",
          displayName: "New Hiera",
        };
      case "create estate":
        return {
          className: "home__content__services__create-estate-card estate-card",
          displayName: "New Estate",
        };
      case "configure":
        return {
          className:
            "home__content__services__configure-estate-card estate-card",
          displayName: "Configure Estate",
        };
      case "handover":
        return {
          className:
            "home__content__services__handover-estate-card estate-card",
          displayName: "Handover Estate",
        };
      default:
        return "estate-card";
    }
  }
  const nameAndType = getClassAndDisplayNameBasedOnType();
  return (
    <div className={nameAndType.className} onClick={handleClick}>
      <span className="card-text">{nameAndType.displayName}</span>
    </div>
  );
}