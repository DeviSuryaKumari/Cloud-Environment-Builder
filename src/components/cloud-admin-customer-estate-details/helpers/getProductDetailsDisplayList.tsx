import React from "react";

export function getProductDetailsDisplayList(productDetailsList: any) {
  // const productDetailsList = [
  //   {
  //     productName: "SmartPlant Fusion",
  //     version: "Latest",
  //     userCount: 10,
  //     activeSeats: 10,
  //     requiredVMs: 2,
  //     SMEApproved: "Approved",
  //   },
  //   {
  //     productName: "Smart Materials",
  //     version: "10.0.0.0",
  //     userCount: 10,
  //     activeSeats: 10,
  //     requiredVMs: "-",
  //     SMEApproved: "In Progress",
  //   },
  //   {
  //     productName: "Smart 3D",
  //     version: "12.0",
  //     userCount: 10,
  //     activeSeats: 10,
  //     requiredVMs: "-",
  //     SMEApproved: "In Progress",
  //   },
  // ];
  const displayList = productDetailsList.map((product: any) => {
    return (
      <>
        <li className="product-details-list-item">
          <span>{product["ProductName"]}</span>
          <span>{product["Version"]}</span>
          <span>{product["UserCount"]}</span>
          <span>{product["ActiveUserCount"]}</span>
          <span>{product["VMCOUNT"] ?? 0}</span>
          <span>{product["SMEApproval"]}</span>
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
        <span>SME Approved</span>
      </li>
      <div className="product-details-list-item__border-bottom"></div>
    </>
  );
  return displayList;
}
