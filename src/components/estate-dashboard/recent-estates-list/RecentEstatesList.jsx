import React from "react";
import "./recent-estates-list.scss";

export function RecentEstatesList(props) {
  const displayList = props.recentEstates.map((estateObj) => {
    return (
      <>
        <li className="home__content__recent-estates__list-item">
          <span>{estateObj.estateCode}</span>
          <span>{estateObj.customerName}</span>
          <span>{estateObj.registeredDate}</span>
          <span>{estateObj.status}</span>
          <span>
            <button>{estateObj.actions}</button>
          </span>
        </li>
        <div className="home__content__recent-estates__list-item__border-bottom"></div>
      </>
    );
  });
  displayList.unshift(
    <>
      <li className="home__content__recent-estates__list-item">
        <span>Estate Code</span>
        <span>Customer Name</span>
        <span>Registered Date</span>
        <span>Status</span>
        <span>Actions</span>
      </li>
      <div className="home__content__recent-estates__list-item__border-bottom"></div>
    </>
  );
  return <ul className="home__content__recent-estates__list">{displayList}</ul>;
}
