export function getCloudEnvRequestTypeBasedOnEstateStatus(status: string) {
  switch (status) {
    case "NEW":
      return "AcceptEnvRequest";
    case "ACCEPTED":
      return "ApproveEnvRequest";
    case "APPROVED":
      return "BuildEnvRequest";
    default:
      return "";
  }
}
