export const setIsAddEditProductModalOpen = (isOpen: boolean) => ({
  type: "SET_IS_ADD_EDIT_PRODUCT_MODAL_OPEN",
  payload: isOpen,
});

export const setIsNewClassificationModalOpen = (isOpen: boolean) => ({
  type: "SET_IS_NEW_CLASSIFICATION_MODAL_OPEN",
  payload: isOpen,
});

export const setCustomerRecquisitionProductDetailsList = (
  productDetailsList: any
) => ({
  type: "SET_CUSTOMER_RECQUISITION_PRODUCT_DETAILS_LIST",
  payload: productDetailsList,
});

export const setEstateRequestId = (estateRequestId: string) => ({
  type: "SET_ESTATE_REQUEST_ID",
  payload: estateRequestId,
});
