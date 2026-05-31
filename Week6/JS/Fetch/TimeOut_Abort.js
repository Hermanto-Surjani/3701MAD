/* Timeout and Abort

By default, fetch has no timeout. Use an AbortController to cancel requests: */

const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 5000); // 5stimeout
fetch("https://fakestoreapi.com/products/", { signal: controller.signal })
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => {
    if (err.name === "AbortError") {
      console.error("Request timed out");
    } else {
      console.error("Fetch error:", err);
    }
  })
  .finally(() => clearTimeout(timeoutId));
