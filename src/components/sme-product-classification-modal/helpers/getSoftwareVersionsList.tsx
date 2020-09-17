import React from "react";

export function getSoftwareVersionsList() {
  const productsAndVersions = [
    { productName: "Hexagon-SmartMaterials-WPF", version: "10.00.00.0000" },
    { productName: "Hexagon-SmartMaterials-DB", version: "10.00.00.0000" },
    { productName: "Hexagon-SmartReferenceData-SDB", version: "12.00.00.0040" },
  ];

  const displayList = productsAndVersions.map((classificationObj) => {
    return (
      <>
        <li className="software-versions-list-item">
          <span>{classificationObj.productName}</span>
          <span>{classificationObj.version}</span>
        </li>
        <div className="software-versions-list-item__border-bottom"></div>
      </>
    );
  });
  displayList.unshift(
    <>
      <li className="software-versions-list-item">
        <span>Product Name</span>
        <span>Version</span>
      </li>
      <div className="software-versions-list-item__border-bottom"></div>
    </>
  );
  return <ul className="software-versions-list">{displayList}</ul>;
}
