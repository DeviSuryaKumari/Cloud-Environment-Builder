import React from "react";

export function getMappedProductDetailsListItems(productDetailsList: any) {
  const displayList = productDetailsList.map((product: any) => {
    return (
      <>
        <li className="product-details-list-item">
          <span>{product.productName}</span>
          <span>{product.version}</span>
          <span>{product.userCount}</span>
          <span>{product.activeSeatCount}</span>
        </li>
        <div className="product-details-list-item__border-bottom"></div>
      </>
    );
  });
  displayList.unshift(
    <>
      <li className="product-details-list-item">
        <span>Product Name</span>
        <span>Version</span>
        <span>No.of Users</span>
        <span>Active Seats</span>
      </li>
      <div className="product-details-list-item__border-bottom"></div>
    </>
  );
  return displayList;
}
