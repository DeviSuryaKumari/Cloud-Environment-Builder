import React from "react";

export function getProfileAndOSVersionsList() {
  const productsAndVersions = [
    { productProfile: "DBO", osVersion: "W2012", count: 2 },
    { productProfile: "SPRDA", osVersion: "W2019", count: 2 },
  ];

  const displayList = productsAndVersions.map((classificationObj) => {
    return (
      <>
        <li className="product-profiles-list-item">
          <span>{classificationObj.productProfile}</span>
          <span>{classificationObj.osVersion}</span>
          <span>{classificationObj.count}</span>
        </li>
        <div className="product-profiles-list-item__border-bottom"></div>
      </>
    );
  });
  displayList.unshift(
    <>
      <li className="product-profiles-list-item">
        <span>Profile</span>
        <span>OS Version</span>
        <span>Count</span>
      </li>
      <div className="product-profiles-list-item__border-bottom"></div>
    </>
  );
  return <ul className="product-profiles-list">{displayList}</ul>;
}
