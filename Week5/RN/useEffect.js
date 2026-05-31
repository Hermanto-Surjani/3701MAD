/* 
Understanding useEffect in React Native

The useEffect hook in React Native serves the same fundamental purposes as in React: to handle side
effects in functional components. Its flexibility makes it invaluable for tasks like fetching data, setting up
subscriptions, and more within your mobile app development.

Basic Usage of useEffect

useEffect allows you to run side effects from function components. It accepts a function as its first
parameter and an optional array of dependencies as its second.

Here's an adapted example for React Native that uses useEffect to fetch data from an API and display it:
 */

import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
const PostsComponent = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await response.json();
      setPosts(data.slice(0, 5)); // Let's just take the first 5 posts for
      example;
    };
    fetchData();
  }, []); // Empty dependency array means this runs once on mount
  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {item.title}
            </Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};
export default PostsComponent;

/* This example fetches posts from a placeholder API and displays them. useEffect with an empty
dependency array ensures the data fetching logic runs once when the component mounts. */
