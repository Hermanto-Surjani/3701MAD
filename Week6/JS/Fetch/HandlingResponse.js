/* Handling Different Response Types

    JSON: response.json() → JavaScript object
    Text: response.text() → raw string
    Blob: response.blob() → binary data (e.g., images)
    FormData: response.formData() → form entries */

// As plain text
fetch("/README.md")
  .then((res) => res.text())
  .then((text) => console.log(text));
// As image blob
fetch("/image.png")
  .then((res) => res.blob())
  .then((blob) => {
    const imgURL = URL.createObjectURL(blob);
    document.querySelector("img").src = imgURL;
  });
