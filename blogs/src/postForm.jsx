import React, { Component } from 'react';

const PostForm = ({ postTitle, postBody, handleTextChanges, handleSubmit }) => {


    return (
        <div className='post'>
            <form className='form'>
            <h4 className='createPost'>Create Post</h4>
              <div className='postTitle'>
                <label className='titleLabel' htmlFor='postTitle'>Title</label>
                <input className='inputTitle' placeholder='Title...' type='text' name='postTitle' id='postTitle' value={ postTitle } onChange={ handleTextChanges }/>
              </div>
              <div className='postBody'>  
                <label className='bodyLabel' htmlFor='postBody'>Body</label>
                <input className='inputBody' placeholder='Body...' type='text' name='postBody' id='postBody' value={ postBody } onChange={ handleTextChanges }/>    
              </div>
              <div className='submit'>
              <input className='submitButton' type='submit' value='Submit' onClick={ handleSubmit }/>
              </div>
            </form>
        </div>
    )
}


export default PostForm;