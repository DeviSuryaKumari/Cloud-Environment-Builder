export async function postRequest(url: string, body: any) {
  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    return "error";
  }
}
