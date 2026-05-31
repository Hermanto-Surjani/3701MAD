/* AsyncStorage in React Native: A Comprehensive Guide

    Asynchronous Storage, or AsyncStorage, is a simple, unencrypted, asynchronous, persistent key-value
    storage system in React Native. It is used for storing data locally on the device, making it ideal for saving
    preferences, settings, and short-term data that needs to persist across app restarts but doesn't require
    server synchronization or more complex querying.

Introduction to AsyncStorage

    AsyncStorage has been part of React Native for a while but is now maintained separately as @react-
    native-async-storage/async-storage to ensure better management and updates outside the core
    React Native repository. It provides a straightforward API to store, retrieve, update, and delete data.

Setup

To use AsyncStorage in your React Native project, you first need to install the package:

npx expo install @react-native-async-storage/async-storage    

// npm install @react-native-async-storage/async-storage - Do not use anymore (Obsolete)



or

    yarn add @react-native-async-storage/async-storage

Basic Usage

Import AsyncStorage in your component:

    import AsyncStorage from "@react-native-async-storage/async-storage";

Storing Data

    To store a value, use AsyncStorage.setItem(key, value). Note that both key and value must be
    strings. */

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

/* Retrieving Data
To retrieve a value, use AsyncStorage.getItem(key). */

const retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
};

/* Updating Data

    Updating data is the same as storing data: use setItem with the new value.

Deleting Data

    To delete a value, use AsyncStorage.removeItem(key). */

const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
  }
};

/* Working with JSON

    Often, you'll need to store objects rather than strings. Since AsyncStorage can only store
     string values,
    you'll need to serialize and deserialize your objects using JSON.stringify() and JSON.parse().
     */

const storeObject = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};
const getObject = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

/* Best Practices

  Key Management: Use clear and consistent keys to avoid conflicts.
  Error Handling: Always catch and handle potential errors when interacting with AsyncStorage.
  Performance Considerations: While AsyncStorage is asynchronous and non-blocking, excessively
  large or frequent operations can still affect performance. Optimize your storage usage and
  minimize
  reads and writes when possible.

Conclusion

AsyncStorage in React Native offers a simple and effective way to persist data locally on a 
device. By
following the best practices outlined in this tutorial, you can enhance your app's user 
experience by
remembering user preferences, saving draft data, or caching necessary information for offline
 use.
Remember, though, that AsyncStorage is not suitable for sensitive data that requires encryption
 or complex
querying capabilities for which you might consider other storage solutions like databases. */
