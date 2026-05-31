/* Asynchronous Error Handling

6.1 Promises with .catch() */

fetch("/api/data")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("Fetch failed:", err));

/* 6.2 async/await with try…catch */

async function getData() {
  try {
    const res = await fetch("/api/data");
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error in getData:", err);
    return null;
  }
}
getData();
