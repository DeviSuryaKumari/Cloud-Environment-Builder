import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getProductDetailsDisplayList } from "./helpers/getProductDetailsDisplayList";
import { getProductsAndClassificationDetails } from "./helpers/getProductsAndClassificationDetails";
import SMEProductClassificationModal from "../sme-product-classification-modal/SMEProductClassificationModal";
import * as actions from "../../actions";
import { getRequest } from "../../http-requests/getRequest";
import "./sme-customer-estate-details.scss";

let SMECustomerEstateDetails = function (props) {
  const onClassificationChange = (event) => {
    if (event.target.value === "new") {
      props.setIsNewClassificationModalOpen(true);
    }
  };
  const getClassificationDropdownList = () => {
    return (
      <select
        style={{ width: "100px" }}
        onChange={(event) => onClassificationChange(event)}
      >
        <option value="classification-1">Option 1</option>
        <option value="new">New</option>
        <option value="classification-2">Option 2</option>
      </select>
    );
  };
  // const displayList = getProductDetailsDisplayList(response,
  // getClassificationDropdownList
  // );

  const [estateDetails, setEstateDetails] = useState([]);
  const [productDetails, setProductDetails] = useState([]);

  const getURL =
    "https://smartcloudautomationfunctionapp.azurewebsites.net/api/GetDBData?" +
    "code=M3jSstm1BiBhtVghQDz45vDr0CbvwGz2ACOu3lxWDw7OeT5uT8rMwg==&cloud_env_request_type=GetSMEEstateDetails&cloud_env_request_id=" +
    props.estateRequestId;
  useEffect(() => {
    getRequest(getURL).then((response) => {
      if (response !== "error") {
        //console.log(response)
        setEstateDetails(response["Customer"][0]);
        setProductDetails(
          getProductDetailsDisplayList(
            response["Product"],
            getClassificationDropdownList
          )
        );
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="sme-customer-estate-details">
      <SMEProductClassificationModal />
      <div className="customer-details">
        <input
          className="form-control"
          type="text"
          placeholder="Customer Name"
        />
        <select className="form-control">
          <option selected disabled>
            {estateDetails.Location}
          </option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <input className="form-control" type="text" placeholder="Estate Code" />
        <input
          className="form-control"
          type="text"
          placeholder="Estate Short Code"
        />
      </div>
      <div className="product-details">
        <h3>Status: Under Preparation</h3>
        <ul className="product-details-list">{productDetails}</ul>
      </div>
      <div style={{ marginTop: "8px", marginLeft: "10px" }}>
        <h3>Classifications</h3>
        {getProductsAndClassificationDetails()}
      </div>
      <div className="form-action-bar">
        <button>Submit</button>
        <button>Save</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  estateRequestId: state.estateRequestId,
});

const mapDispatchToProps = (dispatch) => ({
  setIsNewClassificationModalOpen: (isModalOpen) =>
    dispatch(actions.setIsNewClassificationModalOpen(isModalOpen)),
});

SMECustomerEstateDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(SMECustomerEstateDetails);

export default SMECustomerEstateDetails;
