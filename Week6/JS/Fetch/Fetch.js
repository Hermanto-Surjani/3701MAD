/* What Is fetch?

    A modern, promise-based API for making network requests in browsers (and in Node.js via polyfills or built-in support).
    Replaces older XMLHttpRequest with a cleaner syntax. 

Basic GET Request*/

fetch(" https://fakestoreapi.com/products/")
  .then((response) => {
    if (!response.ok) {
      // HTTP-level error (404, 500, etc.)
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // parse JSON body
  })
  .then((data) => {
    console.log("Received data:", data);
  })
  .catch((err) => {
    console.error("Fetch error:", err);
  });

/* Explanation:
    �. fetch(url) returns a Promise<Response>.
    �. response.ok is true for status codes in the 200–299 range.
    �. response.json() returns a promise that resolves to the parsed JavaScript object. */
