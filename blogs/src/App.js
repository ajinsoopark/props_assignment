import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Feed from './feed.js';
const posts = require('./blog_posts.json');

class App extends Component {
  constructor() {
    super ()
    this.state =  {
      allPosts: posts
    }
  }

render () {
  return (
    <React.Fragment>
      <Feed allPosts={ this.state.allPosts }/>
    </React.Fragment>
  )
}
}

export default App;
