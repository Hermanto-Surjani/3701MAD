/* Using async / await */

async function getData() {
  try {
    const response = await fetch(" https://fakestoreapi.com/products/");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Received data:", data);
  } catch (err) {
    console.error("Fetch failed:", err);
  }
}
getData();

/* Why use it?
More readable flow: linear “try → await → catch” instead of chained .then(). */
