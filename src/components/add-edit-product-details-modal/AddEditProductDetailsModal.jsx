import { uniqBy } from "lodash";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getRequest } from "../../http-requests/getRequest";
import * as actions from "../../actions";
import { getMappedProductDropdownOptions } from "./helpers/getMappedProductDropdownOptions";
import "./add-edit-product-details-modal.scss";

let AddEditProductDetailsModal = function (props) {
  const [userCount, setUserCount] = useState(0);
  const [activeSeatCount, setActiveSeatCount] = useState(0);
  const [selectedProductName, setSelectedProductName] = useState("Product");
  const [productDropdownOptions, setProductDropdownOptions] = useState([]);

  const getURL =
    "https://smartcloudautomationfunctionapp.azurewebsites.net/api/Exec-CloudEnvQuery" +
    "?code=4vRbVSGRDRz9uyhBdtrt2OFLS5JiIpgd2OqvFxCr0Q32QaFLlt7Q4w==&cloud_env_request_type=Get_cloud_products";

  useEffect(() => {
    getRequest(getURL).then((response) => {
      if (response !== "error") {
        setProductDropdownOptions(getMappedProductDropdownOptions(response));
      }
    });
  }, [getURL]);

  const handleInputChange = (event, inputType) => {
    if (inputType === "user-count") {
      setUserCount(event.target.value);
    } else if (inputType === "active-seat-count") {
      setActiveSeatCount(event.target.value);
    }
  };

  const handleSubmit = () => {
    if (selectedProductName !== "Product") {
      props.setCustomerRecquisitionProductDetailsList(
        uniqBy(
          props.customerRecquisitionProductDetailsList.concat({
            productName: selectedProductName,
            version: "Latest",
            userCount,
            activeSeatCount,
          }),
          function (product) {
            return product.productName;
          }
        )
      );
      props.setIsAddEditProductModalOpen(false);
      setSelectedProductName("Product");
    } else {
      alert("Select Valid Product Name or Click Cancel");
    }
  };
  const handleCancel = () => {
    props.setIsAddEditProductModalOpen(false);
    setSelectedProductName("Product");
  };
  return (
    <div
      className={`add-edit-product-details-modal ${
        props.isModalOpen ? "" : "hidden"
      }`}
    >
      <div className="modal-container">
        <div className="header-text">Add/Edit Product</div>
        <div className="modal-content">
          <select
            className="form-control"
            onChange={(e) => setSelectedProductName(e.target.value)}
            value={selectedProductName}
          >
            {productDropdownOptions}
          </select>
          <select className="form-control" disabled>
            <option selected disabled>
              Product Version (Latest)
            </option>
          </select>
          <div className="user-count form-control">
            <span>No. of Users:</span>
            <input
              type="number"
              min="0"
              step="1"
              style={{ padding: "5px", width: "60%" }}
              value={userCount}
              onChange={(event) => handleInputChange(event, "user-count")}
            />
          </div>
          <div className="active-seats form-control">
            <span>Active Seats:</span>
            <input
              type="number"
              min="0"
              step="1"
              style={{ padding: "5px", width: "60%" }}
              value={activeSeatCount}
              onChange={(event) =>
                handleInputChange(event, "active-seat-count")
              }
            />
          </div>
          <div className="modal-form-action-bar">
            <button onClick={() => handleSubmit()}>Add</button>
            <button onClick={() => handleCancel()}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isModalOpen: state.isAddEditProductModalOpen,
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

AddEditProductDetailsModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEditProductDetailsModal);
export default AddEditProductDetailsModal;
