Absolutely — you can make **ActivityIndicator** automatically switch colours
based on **light or dark theme** in React Native.  
The cleanest way is to use **`useColorScheme()`**, which tells you whether the
device is currently in light or dark mode.

Here’s the **short, correct, modern approach**.

---

## 🌗 ActivityIndicator that changes colour based on theme

```jsx
import React from 'react';
import { ActivityIndicator, useColorScheme } from 'react-native';

export default function LoadingSpinner() {
  const theme = useColorScheme(); // "light" or "dark"

  return (
    <ActivityIndicator
      size="large"
      color={theme === 'dark' ? '#fff' : '#000'}
    />
  );
}
```

### What this does

- If the phone is in **dark mode** → spinner is **white**
- If the phone is in **light mode** → spinner is **black**

---

## 🎨 Want nicer colours?

You can use your own palette:

```jsx
<ActivityIndicator
  size="large"
  color={theme === 'dark' ? '#4ade80' : '#16a34a'} // green shades
/>
```

Or even match your app’s brand colours.

---

## 🧩 Using it inside a component with styles

```jsx
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <ActivityIndicator
    size="large"
    color={theme === 'dark' ? '#93c5fd' : '#1d4ed8'} // blue hues
  />
</View>
```

---

## 🔥 Bonus: If you're using React Navigation or a theme provider

You can pull colours from the theme:

```jsx
import { useTheme } from '@react-navigation/native';

const { colors } = useTheme();

<ActivityIndicator size="large" color={colors.primary} />;
```

---

If you want, I can help you build a **reusable themed ActivityIndicator
component**, or integrate it into your existing UI.
