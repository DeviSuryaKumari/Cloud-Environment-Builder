import React, { useState, useEffect } from "react";
import { mapPackageResponse } from "../../data-mappers/mapPackageResponse";
import "./configure-estate.scss";

export function ConfigureEstate(props) {
  const [packagesList, setPackagesList] = useState([]);
  // const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    // Used dummy URL here, this will be replaced with actual URL exposed by web service
    const myGetURL = "http://localhost:8080/mygetdata";

    fetch(myGetURL)
      .then((response) => response.json())
      .then((rawPackageObjects) => {
        const mappedPackagesList = mapPackageResponse(rawPackageObjects);
        setPackagesList(mappedPackagesList);
      })
      .catch((error) => console.log(error));
  }, []);

  let displayList = packagesList.map((packageObj) => (
    <li className="package-list-item" key={packageObj.packageName}>
      {packageObj.packageName}
    </li>
  ));

  // for (let i = 0; i < 10; i++) {
  //   displayList = displayList.concat(displayList);
  // }

  return (
    <div className="configure-estate-container">
      <div className="packages-list-container">
        <ul className="packages-list">{displayList}</ul>
      </div>
      <div className="version-list-container"></div>
      <div className="selected-packages-container"></div>
    </div>
  );
}
