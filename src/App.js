import React, { Component } from 'react';
import './App.css';
import PostList from './components/posts/PostList';
import axios from 'axios';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      posts : []
    };

    axios.get('https://jsonplaceholder.typicode.com/posts').then(posts => {
      this.setState({ posts: posts.data })
    }).catch(err => { console.log(err); });
  }

  render() {
    return (
      <PostList posts={this.state.posts}/>
    )
  }
}

export default App;
