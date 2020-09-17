import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { getSoftwareVersionsList } from "./helpers/getSoftwareVersionsList";
import { getProfileAndOSVersionsList } from "./helpers/getProfileAndOSVersionsList";
import "./sme-product-classification-modal.scss";

let SMEProductClassificationModal = function (props) {
  return (
    <div
      className={`sme-product-classification-modal ${
        props.isModalOpen ? "" : "hidden"
      }`}
    >
      <div className="modal-container">
        <div className="header-text">New Classification</div>
        <div className="modal-content">
          <input
            className="form-control"
            type="text"
            placeholder="Classification Name"
          />
          <input className="form-control" type="text" placeholder="Product" />
          <input
            className="form-control"
            type="text"
            placeholder="Product Version"
          />

          <div className="product-profiles">
            <h3>Profiles and Operating Systems</h3>
            <div style={{ maxHeight: "170px", overflowY: "auto" }}>
              {getProfileAndOSVersionsList()}
            </div>
          </div>
          <div className="software-versions">
            <h3>Software Versions</h3>
            <div style={{ maxHeight: "200px", overflowY: "auto" }}>
              {getSoftwareVersionsList()}
            </div>
          </div>
          <div className="modal-form-action-bar">
            <button>Add</button>
            <button
              onClick={() => props.setIsNewClassificationModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isModalOpen: state.isNewClassificationModalOpen,
});

const mapDispatchToProps = (dispatch) => ({
  setIsNewClassificationModalOpen: (isModalOpen) =>
    dispatch(actions.setIsNewClassificationModalOpen(isModalOpen)),
});

SMEProductClassificationModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(SMEProductClassificationModal);
export default SMEProductClassificationModal;
