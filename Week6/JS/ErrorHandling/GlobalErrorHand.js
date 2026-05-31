/* Global Error Handlers

Sometimes you want a last-resort catch:

Browser: */

window.onerror = (message, source, line, col, error) => {
  console.error("Global error:", message, "at", source, line);
};

/* Node.js: */

process.on("uncaughtException", (err) => {
  console.error("Uncaught exception:", err);
  process.exit(1);
});
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled rejection:", reason);
});
