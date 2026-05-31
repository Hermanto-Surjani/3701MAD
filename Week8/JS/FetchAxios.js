/* 1. Introduction

When making HTTP requests in JavaScript, two popular options are:
    fetch: A built-in, modern API.
    axios: A third-party library offering a more powerful and user-friendly wrapper.
Let's compare them using async/await style, which makes code cleaner and easier to read. */

/* 2. Basic Usage
Using fetch */

// async function fetchPost() {
//   try {
//     const response = await fetch(
//       'https://jsonplaceholder.typicode.com/posts/1',
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }
// fetchPost();

/* fetch requires you to manually call await response.json() to extract the data. */

/* Using axios */

import axios from 'axios';
// async function fetchPost2() {
//   try {
//     const response = await axios.get(
//       'https://jsonplaceholder.typicode.com/posts/1',
//     );
//     console.log(response.data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }
// fetchPost2();

/* axios automatically parses the JSON, and data is under response.data. */

/* 3. Error Handling
With fetch */

async function fetchWithErrorHandling() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/404');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch Error:', error);
  }
}
fetchWithErrorHandling();

/* fetch does not automatically reject on HTTP errors, so you must check response.ok. */

/* With axios */

async function axiosWithErrorHandling() {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/404',
    );
    console.log(response.data);
  } catch (error) {
    console.error('Axios Error Status:', error.response?.status);
    console.error('Axios Error Message:', error.message);
  }
}
axiosWithErrorHandling();

/* axios automatically rejects the promise if a HTTP error status occurs. */

/* 5. Advanced Features (axios)

Timeouts */

axios.get('/slow-url', { timeout: 5000 });

/* Request cancellation */

const controller = new AbortController();
axios.get('/some-url', { signal: controller.signal });
controller.abort();

/* Request/Response Interceptors */

axios.interceptors.request.use((config) => {
  console.log('Sending request:', config);
  return config;
});

/* Global Configuration */

axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = 'Bearer token';
