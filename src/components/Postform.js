import React, {Component} from 'react';

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

    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // The fetch() method can optionally accept a second parameter, an init object that allows you to control a number of different settings
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post),
    }).then(response => response.json())
    .then(data => console.log(data));
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

export default Postform;
