/* Synchronous Error Handling: try…catch…finally

Wrap code that may throw in a try block and handle it in catch. Optionally, use finally for cleanup. */

function parseJSON(jsonStr) {
  try {
    const data = JSON.parse(jsonStr);
    console.log("Parsed successfully:", data);
    return data;
  } catch (err) {
    console.error("Failed to parse JSON:", err.message);
    return null;
  } finally {
    console.log("parseJSON done");
  }
}
parseJSON("invalid");
// Failed to parse JSON: Unexpected token i in JSON at position 0
// parseJSON done

/*  try: executes code that may throw.
    catch (err): receives the thrown Error object.
    finally: always runs, regardless of throw. */
