export async function putRequest(putURL: string) {
  const response = await fetch(putURL, {
    method: "PUT",
  });
  if (!response.ok) {
    return "error";
  }
}
