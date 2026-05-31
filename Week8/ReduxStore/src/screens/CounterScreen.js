import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  incremented,
  selectCounter,
  decremented,
  incAsync,
  incByValue,
} from '../redux/counterSlice';

export default function CounterScreen() {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter: {counter}</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Button title="Increment" onPress={() => dispatch(incremented())} />
        <Button title="Decrement" onPress={() => dispatch(decremented())} />
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <Button title="+ 5" onPress={() => dispatch(incByValue(5))} />
        <Button title="- 5" onPress={() => dispatch(incByValue(-5))} />
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <Button title="Async -1" onPress={() => dispatch(incAsync(-1))} />
        <Button title="Async +1" onPress={() => dispatch(incAsync(1))} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
