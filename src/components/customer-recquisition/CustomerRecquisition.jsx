import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import AddEditProductDetailsModal from "../add-edit-product-details-modal/AddEditProductDetailsModal";
import { getMappedProductDetailsListItems } from "./helpers/getMappedProductDetailsListItems";
import { AZURE_CLOUD_LOCATIONS } from "../../constants";
import "./customer-recquisition.scss";
import * as actions from "../../actions";
import { postRequest } from "../../http-requests/postRequest";
import { getAzureLocationsDropdownOptions } from "./helpers/getAzureLocationsDropdownOptions";
import { mapCustomerRecquisitionproductDetailsList } from "./helpers/mapCustomerRecquisitionproductDetailsList";

let CustomerRecquisition = function (props) {
  const history = useHistory();
  const [customerName, setCustomerName] = useState("");
  const [pcPhone, setPcPhone] = useState("");
  // Primary Contact Name
  const [pcName, setPcName] = useState("");
  // Primary Contact Email
  const [pcEmail, setPcEmail] = useState("");
  const [address, setAddress] = useState("");
  const [azureLocation, setAzureLocation] = useState(
    AZURE_CLOUD_LOCATIONS.default
  );
  const [isConfirmed, setConfirmed] = useState(false);

  const displayList = getMappedProductDetailsListItems(
    props.customerRecquisitionProductDetailsList
  );

  const validateAndSubmit = () => {
    if (
      customerName === "" ||
      pcName === "" ||
      pcPhone === "" ||
      pcEmail === "" ||
      address === "" ||
      azureLocation === AZURE_CLOUD_LOCATIONS.default ||
      !isConfirmed ||
      props.customerRecquisitionProductDetailsList.length === 0
    ) {
      alert("Please fill in All required fields");
    } else {
      let postURL =
        "https://smartcloudautomationfunctionapp.azurewebsites.net/" +
        "api/Create-CloudEnvRequest?code=ovF6c0CFqL3dwym3VRLfm3J2xrGC1YViL5WeYIbblNpSVi2RxkH0wg==&";
      postURL += `cloud_env_customerName=${customerName}&`;
      postURL += `cloud_env_customerContact=${pcName}&`;
      postURL += `cloud_env_customerPhone=${pcPhone}&`;
      postURL += `cloud_env_customerEmail=${pcEmail}&`;
      postURL += `cloud_env_customerAddress=${address}&`;
      postURL += `cloud_env_estateRegion=${azureLocation}&`;
      postRequest(
        postURL,
        mapCustomerRecquisitionproductDetailsList(
          props.customerRecquisitionProductDetailsList
        )
      );
      history.push("/");
      props.setCustomerRecquisitionProductDetailsList([]);
    }
  };

  const handleReset = () => {
    setCustomerName("");
    setPcPhone("");
    setPcName("");
    setPcEmail("");
    setAddress("");
    setAzureLocation(AZURE_CLOUD_LOCATIONS.default);
    props.setCustomerRecquisitionProductDetailsList([]);
    setConfirmed(false);
  };

  window.onbeforeunload = function () {
    return "Data will be lost if you leave the page, are you sure?";
  };

  return (
    <div className="customer-recquisition-form">
      <AddEditProductDetailsModal />
      <div className="customer-details">
        <input
          className="form-control"
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Primary Contact Name"
          value={pcName}
          onChange={(e) => setPcName(e.target.value)}
        />
        <div className="primary-contact-name-email">
          <input
            className="form-control"
            type="phone"
            placeholder="Primary Contact Phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={pcPhone}
            onChange={(e) => setPcPhone(e.target.value)}
          />
          <input
            className="form-control"
            type="email"
            placeholder="Primary Contact Email"
            pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
            value={pcEmail}
            onChange={(e) => setPcEmail(e.target.value)}
          />
        </div>
        <textarea
          className="form-control"
          placeholder="Address: Head Office"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <select
          className="form-control"
          value={azureLocation}
          onChange={(e) => setAzureLocation(e.target.value)}
        >
          {getAzureLocationsDropdownOptions()}
        </select>
      </div>
      <div className="product-details">
        <div className="product-action-icons">
          <FontAwesomeIcon
            icon={icons.faCartPlus}
            className="action-icon"
            onClick={() => props.setIsAddEditProductModalOpen(true)}
          />
          {/* <FontAwesomeIcon icon={icons.faEdit} className="action-icon" /> */}
          <FontAwesomeIcon
            icon={icons.faBan}
            className="action-icon"
            disabled={props.customerRecquisitionProductDetailsList.length === 0}
            onClick={() => {
              props.setCustomerRecquisitionProductDetailsList([]);
            }}
          />
        </div>
        <ul className="product-details-list">{displayList}</ul>
        {props.customerRecquisitionProductDetailsList.length === 0 ? (
          <i style={{ alignSelf: "center" }}>
            No data to show, Add some products
          </i>
        ) : (
          <></>
        )}
      </div>
      <div className=" form-control" style={{ marginTop: "10px" }}>
        <input
          type="checkbox"
          checked={isConfirmed}
          onChange={() => setConfirmed(!isConfirmed)}
          style={{ marginRight: "10px" }}
        />
        <span>I affirm that the information provided here is true</span>
      </div>
      <div className="form-action-bar">
        <button onClick={validateAndSubmit}>Submit</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  customerRecquisitionProductDetailsList:
    state.customerRecquisitionProductDetailsList,
});

const mapDispatchToProps = (dispatch) => ({
  setIsAddEditProductModalOpen: (isModalOpen) =>
    dispatch(actions.setIsAddEditProductModalOpen(isModalOpen)),
  setCustomerRecquisitionProductDetailsList: (productDetailsList) =>
    dispatch(
      actions.setCustomerRecquisitionProductDetailsList(productDetailsList)
    ),
});

CustomerRecquisition = connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerRecquisition);
export default CustomerRecquisition;
