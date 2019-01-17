import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Feed from './feed.js';
import PostForm from './postForm';
const posts = require('./blog_posts.json');

class App extends Component {
  constructor() {
    super ()
    this.state =  {
      allPosts: posts,
      postTitle: '',
      postBody: '',
      submitError: false
    }
  }

  handleTextChanges = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { allPosts, postTitle, postBody } = this.state
    let newPosts = [...allPosts];
    let newId = newPosts[newPosts.length - 1].id + 1
    let newPost = {
      id: newId,
      title: postTitle,
      body: postBody
    }

    if (postBody && postTitle) {
      newPosts.push(newPost);
      this.setState({
        allPosts: newPosts,
        postTitle: '',
        postBody: ''
      })
    } else {
      this.setState({ submitError: true })
    }
   
  }

  handleError = () => {
    if (this.state.submitError) {
      return <small className='submitError'>*Please fill out both fields then submit</small>
    }
  }

render () {
  return (
    <React.Fragment>
      <div className='nav'>
      <h1>Channel</h1>
      </div>
      <div className='body'>
      <Feed 
      allPosts={ this.state.allPosts }
      handleTextChanges={ this.handleTextChanges }
      handleSubmit={ this.handleSubmit }
      submitError={ this.submitError }
      handleError={ this.handleError } 
      />
      </div>
    </React.Fragment>
  )
}
}

export default App;
