/* Sending a POST Request */

async function postData(url = "", payload = {}) {
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.*
    headers: {
      "Content-Type": "application/json", // JSON payload
    },
    body: JSON.stringify(payload), // request body
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json(); // parses JSON response
}
// Usage:
postData("https://fakestoreapi.com/products/", { name: "Widget", qty: 10 })
  .then((data) => console.log("Created item:", data))
  .catch((err) => console.error("Error posting data:", err));

/* Key options:

    method: HTTP verb (default is "GET").
    headers: any additional headers you need.
    body: string or FormData for POST/PUT requests. */
