import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

// create a subclass (child) Posts of class of Component
class Posts extends Component {
  // no constructor is needed anymore
  // The constructor method is a special method for creating and initializing an object created with a class
  // constructor(props) {
  //   // The super keyword is used to call corresponding methods of super class. This is one advantage over prototype-based inheritance.
  //   super(props);
  //
  //   this.state = {
  //     posts: [],
  //   }
  // }
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    // map the posts here because calling function outside the render will not change state and will not render
    const postItems = this.props.posts.map(post =>
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

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
})

export default connect(mapStateToProps, {fetchPosts})(Posts);
