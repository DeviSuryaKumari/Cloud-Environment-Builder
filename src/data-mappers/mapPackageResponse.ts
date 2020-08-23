import { IPackageData } from "../custom-data-types/IPackageData";

/**
 * This function is used to map the raw package response into fields that
 * are required for Configure Estate screen UI
 * @param packageResponseObjects Package response objects array
 */
export function mapPackageResponse(
  packageResponseObjects: any[]
): IPackageData[] {
  return packageResponseObjects.map((responseObj) => ({
    packageName: responseObj.id,
    currentVersion: responseObj.version,
    availableVersions: responseObj.versions.map(
      (versionObj: any) => versionObj.version
    ),
  }));
}
