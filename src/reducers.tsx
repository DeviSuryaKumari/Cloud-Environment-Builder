import { combineReducers } from "redux";

const activeRole = (state = "cloud-admin", action: any) => {
  return state;
};

const isAddEditProductModalOpen = (state = false, action: any) => {
  switch (action.type) {
    case "SET_IS_ADD_EDIT_PRODUCT_MODAL_OPEN":
      return action.payload;
    default:
      return state;
  }
};

const isNewClassificationModalOpen = (state = false, action: any) => {
  switch (action.type) {
    case "SET_IS_NEW_CLASSIFICATION_MODAL_OPEN":
      return action.payload;
    default:
      return state;
  }
};

const customerRecquisitionProductDetailsList = (state = [], action: any) => {
  switch (action.type) {
    case "SET_CUSTOMER_RECQUISITION_PRODUCT_DETAILS_LIST":
      return action.payload;
    default:
      return state;
  }
};

const estateRequestId = (state = "", action: any) => {
  switch (action.type) {
    case "SET_ESTATE_REQUEST_ID":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  activeRole,
  isAddEditProductModalOpen,
  isNewClassificationModalOpen,
  customerRecquisitionProductDetailsList,
  estateRequestId,
});
