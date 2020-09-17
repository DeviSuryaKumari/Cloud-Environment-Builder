import React from "react";
import { AZURE_CLOUD_LOCATIONS } from "../../../constants";

export function getAzureLocationsDropdownOptions() {
  return (
    <>
      <option selected disabled value={AZURE_CLOUD_LOCATIONS.default}>
        {AZURE_CLOUD_LOCATIONS.default}
      </option>
      <option value={AZURE_CLOUD_LOCATIONS.EE}>
        {AZURE_CLOUD_LOCATIONS.EE}
      </option>
      <option value={AZURE_CLOUD_LOCATIONS.WE}>
        {AZURE_CLOUD_LOCATIONS.WE}
      </option>
    </>
  );
}
