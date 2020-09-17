export function mapCustomerRecquisitionproductDetailsList(
  productDetailsList: any
) {
  return productDetailsList.map((obj: any) => ({
    product: obj.productName,
    version: obj.version,
    user_count: obj.userCount,
    active_user: obj.activeSeatCount,
  }));
}
