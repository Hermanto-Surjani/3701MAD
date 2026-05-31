/* 7. Exercises

Exercise 1: Using fetch
Write an async function to fetch posts from https://jsonplaceholder.typicode.com/posts and
log the first post's title. */

async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    console.log('1st title', posts[0].title);
    console.log('1st 10 posts', posts.slice(0, 10));
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

fetchPosts();

/* Exercise 2: Using axios
Write an async function with axios to fetch users from
https://jsonplaceholder.typicode.com/users and log their names. */

import axios from 'axios';
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchUsers() {
  try {
    const response2 = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    await delay(1000);
    response2.data.forEach((user) => console.log(user.name));
  } catch (error2) {
    console.error('Error fetching users:', error2);
  }
}
fetchUsers();
