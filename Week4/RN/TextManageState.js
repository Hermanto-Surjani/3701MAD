/* Managing Input State with useState

Using the useState hook allows you to manage and react to changes in the input value.
Example: */

const [username, setUsername] = useState("");

// Integration:

<TextInput
  style={styles.input}
  placeholder="Username"
  onChangeText={setUsername}
  value={username}
/>;
