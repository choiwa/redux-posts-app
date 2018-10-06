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
