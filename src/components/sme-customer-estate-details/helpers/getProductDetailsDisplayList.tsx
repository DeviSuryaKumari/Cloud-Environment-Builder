import React from "react";

export function getProductDetailsDisplayList(
  rawResponse: any,
  getClassificationDropdownList: any
) {

  const productDetailsList = rawResponse.map((responseObj: any) => ({
    productName:    responseObj["ProductName"],
    version:        responseObj["Version"],
    userCount:      responseObj["UserCount"],
    activeSeats:    responseObj["ActiveUserCount"],
    requiredVMs:    responseObj["VMCOUNT"],
    SMEApproval:    responseObj["SMEApproval"],
    classification: getClassificationDropdownList(),
  }));

  // const productDetailsList = [
  //   {
  //     productName: "SmartPlant Fusion",
  //     version: "Latest",
  //     userCount: 10,
  //     activeSeats: 10,
  //     requiredVMs: 2,
  //     classification: getClassificationDropdownList(),
  //   },
  //   {
  //     productName: "Smart Materials",
  //     version: "10.0.0.0",
  //     userCount: 10,
  //     activeSeats: 10,
  //     requiredVMs: "-",
  //     classification: getClassificationDropdownList(),
  //   },
  //   {
  //     productName: "Smart 3D",
  //     version: "12.0",
  //     userCount: 10,
  //     activeSeats: 10,
  //     requiredVMs: "-",
  //     classification: getClassificationDropdownList(),
  //   },
  // ];
  const displayList = productDetailsList.map((product:any) => {
    return (
      <>
        <li className="product-details-list-item">
          <span>{product.productName}</span>
          <span>{product.version}</span>
          <span>{product.userCount}</span>
          <span>{product.activeSeats}</span>
          <span>{product.requiredVMs}</span>
          <span>{product.classification}</span>
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
        <span>VMs Required</span>
        <span>Classification</span>
      </li>
      <div className="product-details-list-item__border-bottom"></div>
    </>
  );
  return displayList;
}
