import React from "react";

export function getMappedProductDropdownOptions(productsResponse: any) {
  const firstOption = (
    <option selected disabled>
      Product
    </option>
  );
  const dropdownOptions = productsResponse.map((responseObj: any) => {
    const productName: string = responseObj["cp_product_name"];
    return <option value={productName}>{productName}</option>;
  });

  dropdownOptions.unshift(firstOption);
  return dropdownOptions;
}
