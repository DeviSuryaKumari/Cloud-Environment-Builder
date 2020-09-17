import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getProductDetailsDisplayList } from "./helpers/getProductDetailsDisplayList";
import { getButtonTextBasedOnEstateStatus } from "./helpers/getButtonTextBasedOnEstateStatus";
import "./cloud-admin-customer-estate-details.scss";
import { getAzureLocationsDropdownOptions } from "../customer-recquisition/helpers/getAzureLocationsDropdownOptions";
import { getCloudEnvRequestTypeBasedOnEstateStatus } from "./helpers/getCloudEnvRequestTypeBasedOnEstateStatus";
import { getRequest } from "../../http-requests/getRequest";
import { AZURE_CLOUD_LOCATIONS } from "../../constants";
import { putRequest } from "../../http-requests/putRequest";

let CACustomerEstateDetails = function (props) {
  const history = useHistory();
  const [displayList, setDisplayList] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [estateName, setEstateName] = useState("");
  const [estateCode, setEstateCode] = useState("");
  const [estateStatus, setEstateStatus] = useState("");
  const [azureLocation, setAzureLocation] = useState(
    AZURE_CLOUD_LOCATIONS.default
  );
  const [cciFilePath, setCCIFilePath] = useState("");

  const getURL =
    "https://smartcloudautomationfunctionapp.azurewebsites.net/api/GetDBData" +
    "?code=M3jSstm1BiBhtVghQDz45vDr0CbvwGz2ACOu3lxWDw7OeT5uT8rMwg==&cloud_env_request_type=GetCloudAdminEstateDetails&" +
    "cloud_env_request_id=" +
    props.estateRequestId;

  useEffect(() => {
    let promise = getRequest(getURL);
    promise.then((rawResponse) => {
      const productDetails = rawResponse["Product"];
      const customerDetails = rawResponse["Customer"][0];
      setCustomerName(customerDetails["CustomerName"]);
      setEstateName(customerDetails["EstateName"]);
      setEstateCode(customerDetails["EstateCode"]);
      setEstateStatus(customerDetails["Status"]);
      setCCIFilePath(customerDetails["CCI"]);
      setAzureLocation(AZURE_CLOUD_LOCATIONS[customerDetails["EstateRegion"]]);
      setDisplayList(getProductDetailsDisplayList(productDetails));
    });
  }, [getURL]);

  const validateAndActBasedOnStatus = () => {
    if (
      customerName === "" ||
      estateName === "" ||
      estateCode === "" ||
      azureLocation === AZURE_CLOUD_LOCATIONS.default
    ) {
      alert("Please fill in all Required fields");
    } else {
      let putURL =
        "https://smartcloudautomationfunctionapp.azurewebsites.net/" +
        "api/Set-AcceptEnvRequest?code=xtlYAnAiWUiP5dQT8dCQT4QzVOeo4jJncgPaFu7bES/B16ldcYlG9A==&";
      putURL += `cloud_env_request_id=${props.estateRequestId}&`;
      const requestType = getCloudEnvRequestTypeBasedOnEstateStatus(
        estateStatus
      );
      if (requestType !== "") {
        putURL += `cloud_env_request_type=${requestType}`;
      }
      putRequest(putURL);
      history.push("/");
    }
  };

  const validateAndSave = () => {
    if (
      customerName === "" ||
      estateName === "" ||
      estateCode === "" ||
      azureLocation === AZURE_CLOUD_LOCATIONS.default
    ) {
      alert("Please fill in all Required fields");
    } else {
      let putURL =
        "https://smartcloudautomationfunctionapp.azurewebsites.net/" +
        "api/Update-CloudEnvRequest?code=DCxGvTxntJPwQjUr1TjkCGfhyGhhAMHAKCFiWVFHSf7aR1Pok3iDyg==&";

      putURL += `cloud_env_cer_id=${parseInt(props.estateRequestId)}&`;
      putURL += `cloud_env_estate_name=${estateName}&`;
      putURL += `cloud_env_estate_code=${estateCode}&`;
      putURL += `cloud_env_cci_file_path=${cciFilePath}&`;

      const response = putRequest(putURL);
      if (response !== "error") {
        alert("Saved Successfully");
      }
    }
  };

  return (
    <div className="cloud-admin-customer-estate-details">
      <div className="customer-details">
        <span style={{ marginLeft: "10px" }}>
          <span style={{ marginRight: "8px" }}>Customer Name :</span>
          <input
            className="form-control"
            style={{ width: "180px" }}
            type="text"
            placeholder="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </span>
        <span style={{ marginLeft: "10px" }}>
          <span style={{ marginRight: "8px" }}>Azure Location :</span>
          <select
            className="form-control"
            value={azureLocation}
            onChange={(e) => setAzureLocation(e.target.value)}
          >
            {getAzureLocationsDropdownOptions()}
          </select>
        </span>
        <span style={{ marginLeft: "10px" }}>
          <span style={{ marginRight: "-3px" }}>Estate Code (Name) :</span>
          <input
            className="form-control"
            type="text"
            placeholder="Estate Code"
            value={estateName}
            onChange={(e) => setEstateName(e.target.value)}
          />
        </span>
        <span style={{ marginLeft: "10px" }}>
          <span style={{ marginRight: "12px" }}>Estate Short Code :</span>
          <input
            className="form-control"
            type="text"
            placeholder="Estate Short Code"
            value={estateCode}
            onChange={(e) => setEstateCode(e.target.value)}
          />
        </span>
      </div>
      <div className="product-details">
        <h3>Status: {estateStatus}</h3>
        <ul className="product-details-list">{displayList}</ul>
      </div>
      <span style={{ marginTop: "10px", marginLeft: "10px" }}>
        CCI File Location :
        <input
          className="form-control"
          type="text"
          placeholder="CCI File Path"
          value={cciFilePath}
          onChange={(e) => setCCIFilePath(e.target.value)}
        />
      </span>
      <div className="form-action-bar">
        <button onClick={() => validateAndSave()}>Save</button>
        <button onClick={() => validateAndActBasedOnStatus()}>
          {getButtonTextBasedOnEstateStatus(estateStatus)}
        </button>
        <button onClick={() => history.push("/")}>Cancel</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  estateRequestId: state.estateRequestId,
});

CACustomerEstateDetails = connect(mapStateToProps)(CACustomerEstateDetails);

export default CACustomerEstateDetails;
