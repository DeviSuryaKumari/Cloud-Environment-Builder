import React from "react";
import "./recent-estates-list.scss";

export function RecentEstatesList(props) {
  const displayList = props.recentEstates.map((estateObj) => {
    return (
      <>
        <li className="home__content__recent-estates__list-item">
          <span>{estateObj.name}</span>
          <span>{estateObj.status}</span>
          <span>{estateObj.operations}</span>
        </li>
        <div className="home__content__recent-estates__list-item__border-bottom"></div>
      </>
    );
  });
  displayList.unshift(
    <>
      <li className="home__content__recent-estates__list-item">
        <span>{"Name"}</span>
        <span>{"Status"}</span>
        <span>{"Operations"}</span>
      </li>
      <div className="home__content__recent-estates__list-item__border-bottom"></div>
    </>
  );
  return <ul className="home__content__recent-estates__list">{displayList}</ul>;
}
