/* Advanced Conditional Rendering Techniques

�. Ternary Operators:

Allows rendering one of two components based on a condition.

Example: */

// {
//  isLoggedIn ? <Text>Welcome Back!</Text> : <Text>Please Log In</Text>;
// }

/* �. Switch Statements:

Useful for rendering multiple components based on different conditions.

Example: */

// const renderContent = () => {
//   switch (status) {
//     case "loading":
//       return <ActivityIndicator />;
//     case "success":
//       return <Text>Data Loaded Successfully!</Text>;
//     case "error":
//       return <Text>Error Loading Data.</Text>;
//     default:
//       return null;
//   }
// };
// return <View>{renderContent()}</View>;

/* �. Logical Operators:

Using && and || for concise conditional rendering.

Example: */

// {
//   error && <Text style={styles.error}>{error}</Text>;
// }
