export function getButtonTextBasedOnEstateStatus(status: string) {
  switch (status) {
    case "NEW":
      return "Forward to SME";
    case "ACCEPTED":
      return "Approve";
    case "APPROVED":
      return "Proceed to Build";
    case "BUILDING":
      return "Building..";
    case "DONE":
      return "Done";
    default:
      return "Done";
  }
}
