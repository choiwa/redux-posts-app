import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions'

class Postform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    }
    // to bind "this"
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();

    const post = {
      tite: this.state.title,
      body: this.state.body,
    }

    //call action
    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1> add post </h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label> Title: </label> <br />
            <input type='text' name='title' value={this.state.title} onChange={this.onChange}/>
          </div>
          <div>
            <label>Body: </label><br />
            <textarea name="body" onChange={this.onChange} value={this.state.body}/>
          </div>
          <br />
          <button type="submit"> Submit </button>
        </form>

      </div>
    );
  }
}

Postform.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, {createPost})(Postform);
