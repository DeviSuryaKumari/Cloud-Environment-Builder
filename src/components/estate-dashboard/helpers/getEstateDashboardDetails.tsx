import React from "react";

export function getEstateDashboardDetails(rawResponse: any, handleClick: any) {
  const getViewActionNode = (cerId: string) => {
    return (
      <span
        style={{ cursor: "pointer" }}
        onClick={() => handleClick({ type: "view", cerId })}
      >
        View
      </span>
    );
  };
  const estateDetails = rawResponse.map((responseObj: any) => ({
    estateCode: responseObj["Estate Code"],
    customerName: responseObj["Customer Name"],
    registeredDate: responseObj["Registered Date"],
    status: responseObj["Status"],
    actions: getViewActionNode(responseObj["cer_id"]),
  }));
  // [
  //   {
  //     estateCode: "SHELL001",
  //     customerName: "Shell Corporation",
  //     registeredDate: new Date(),
  //     status: "Not Approved",
  //     actions: getViewActionNode(),
  //   },
  //   {
  //     estateCode: "TECNP001",
  //     customerName: "Technip",
  //     registeredDate: new Date(),
  //     status: "Complete",
  //     actions: getViewActionNode(),
  //   },
  //   {
  //     estateCode: "SANSNG001",
  //     customerName: "Samsung Corporation",
  //     registeredDate: new Date(),
  //     status: "Under Construction",
  //     actions: getViewActionNode(),
  //   },
  // ];
  // mockEstateDetails = mockEstateDetails.concat(mockEstateDetails);
  return estateDetails;
}
