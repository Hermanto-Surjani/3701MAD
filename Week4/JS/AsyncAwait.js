async function loadData() {
  console.log("Fetching...");
  const response = await fetch("https://google.com.au");
  console.log("Done!");
}
console.log("A");
loadData();
console.log("B");
