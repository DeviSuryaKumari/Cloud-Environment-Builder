export async function getRequest(getURL: string) {
  let response = await fetch(getURL);
  if (response.ok) {
    // if HTTP-status is 200-299
    // get the response body
    let json = await response.json();
    return json;
  } else {
    alert("HTTP-Error: " + response.status);
    return "error";
  }
}
