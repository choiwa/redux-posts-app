import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
  console.log('this is fetched')
    // https://jsonplaceholder.typicode.com/ for fake data
    fetch('https://jsonplaceholder.typicode.com/posts')
    // .json() returns a promise that resolves with the result of parsing the body text as JSON
    .then(response => response.json())
    .then(data => dispatch({
      type: FETCH_POSTS,
      payload: data
    })
    );
}

export const createPost = (postData) => dispatch => {
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  // The fetch() method can optionally accept a second parameter, an init object that allows you to control a number of different settings
        console.log('this is posted')
  fetch('https://jsonplaceholder.typicode.com/posts', {

    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData),
  })
  .then(response => response.json())
  .then(post =>
    dispatch({
    type: NEW_POST,
    payload: post,
    })
  );
}
