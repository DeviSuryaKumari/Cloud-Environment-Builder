import React from "react";

export function getProductsAndClassificationDetails() {
  const productsAndVersions = [
    { productName: "Hexagon-SmartMaterials-WPF", version: "10.00.00.0000" },
    { productName: "Hexagon-SmartMaterials-DB", version: "10.00.00.0000" },
    { productName: "Hexagon-SmartReferenceData-SDB", version: "12.00.00.0040" },
  ];

  const displayList = productsAndVersions.map((classificationObj) => {
    return (
      <>
        <li className="product-classification-list-item">
          <span>{classificationObj.productName}</span>
          <span>{classificationObj.version}</span>
        </li>
        <div className="product-classification-list-item__border-bottom"></div>
      </>
    );
  });
  displayList.unshift(
    <>
      <li className="product-classification-list-item">
        <span>Product Name</span>
        <span>Version</span>
      </li>
      <div className="product-classification-list-item__border-bottom"></div>
    </>
  );
  return <ul className="product-classification-list">{displayList}</ul>;
}
