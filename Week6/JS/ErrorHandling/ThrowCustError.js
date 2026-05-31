/* Throwing Custom Errors

You can throw any value, but best practice is to throw Error instances (or subclasses) for consistency. */

class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}
function validateUser(user) {
  if (!user.email) {
    throw new ValidationError("email", "Email is required");
  }
}
try {
  validateUser({});
} catch (err) {
  if (err instanceof ValidationError) {
    console.warn(`Field ${err.field}: ${err.message}`);
  } else {
    throw err; // re‑throw unknown errors
  }
}
