/* Best Practices

    Check response.ok before parsing.
    Centralize error handling (e.g., wrap fetch calls in utility functions).
    Set appropriate headers (e.g., Content-Type, authentication tokens).
    Use AbortController for timeouts or cancellation (e.g., user navigation).
    Handle network failures separately from HTTP errors.

8. Browser Support & Polyfills

    Supported in all modern browsers.
    For older browsers or Node.js environments, you can use the node-fetch package or other polyfills.

9. Putting It All Together */

// fetchHelper.js
export async function fetchHelper(url, options = {}) {
  try {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`Status ${res.status}`);
    return res.json();
  } catch (err) {
    console.error(`[fetchHelper] Error fetching ${url}:`, err);
    throw err; // let callers decide how to handle
  }
}
// usage in app.js
import { fetchHelper } from "./fetchHelper.js";
(async () => {
  try {
    const users = await fetchHelper("/api/users");
    console.log("Users list:", users);
  } catch {
    // e.g., show a “retry” button in the UI
  }
})();
