# Best Practices

- Fail Fast: Validate inputs early; throw descriptive errors.
- Avoid Empty catch Blocks: At minimum, log errors.
- Centralize Logging: Send errors to a monitoring service (e.g., Sentry).
- Graceful Degradation: Provide fallback behavior or user messages.
- Clean-up in finally: Close connections, clear timers, etc.
- Re-throw When Appropriate: Donʼt swallow errors you canʼt handle.
- Use Custom Error Types: Makes handling and testing specific cases easier.

# Summary

- JavaScript errors can be syntax, runtime, or logical.
- Use try…catch…finally for synchronous code, and .catch() or try…catch around
  await for async code.
- Throw Error objects (or subclasses) for consistency.
- Implement global handlers only as a safety net.
- Follow best practices: clear messages, centralized logging, and graceful
  degradation.
