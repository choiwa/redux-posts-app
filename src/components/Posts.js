import React, {Component} from 'react';

// create a subclass (child) Posts of class of Component
class Posts extends Component {
  // The constructor method is a special method for creating and initializing an object created with a class
  constructor(props) {
    // The super keyword is used to call corresponding methods of super class. This is one advantage over prototype-based inheritance.
    super(props);

    this.state = {
      posts: [],
    }
  }
  componentDidMount() {
    // https://jsonplaceholder.typicode.com/ for fake data
    fetch('https://jsonplaceholder.typicode.com/posts')
    // .json() returns a promise that resolves with the result of parsing the body text as JSON
    .then(response => response.json())
    .then(data => this.setState({posts: data}));
  }

  render() {
    // map the posts here because calling function outside the render will not change statea and will not render
    const postItems = this.state.posts.map(post =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>);
      
    return (
      <div>
        <h1> Posts </h1>
        {postItems}
      </div>
    )
  }
}

export default Posts;
