// Optimizing Local Images

// Optimizing images ensures faster load times and better performance.

// Best Practices:
// Use Appropriate Formats:
//  PNG: Best for images requiring transparency.
//  JPEG: Suitable for photographs and images without transparency.
// Compress Images:
//  Use tools like ImageOptim or TinyPNG to reduce file sizes without compromising quality.
// Scale Images Appropriately:
//  Provide images at multiple resolutions (e.g., @2x, @3x) for different device pixel densities.

// Example: Providing Multiple Resolutions

// MyReactNativeApp/
// └── assets/
// └── images/
// ├── logo.png // Base resolution
// ├── logo@2x.png // 2x resolution
// └── logo@3x.png // 3x resolution

// React Native automatically selects the appropriate image based on the device's pixel density.