import React from 'react';
import Post from './post';
import PostForm from './postForm';

const Feed = ({ allPosts, postTitle, postBody, handleSubmit, handleTextChanges, handleError }) => {

    let posts = []
    for (let i = allPosts.length - 1; i >= 0; i--) {
        posts.push(
            <Post 
            id={allPosts[i].id}
            title={allPosts[i].title}
            body={allPosts[i].body}
            />
        )
    }
    return (
        <React.Fragment>
            <PostForm 
             postTitle={ postTitle }
             postBody={ postBody }
             handleTextChanges={ handleTextChanges }
             handleSubmit={ handleSubmit }
             />
             { handleError() }
             { posts }
        </React.Fragment>
    )
}

export default Feed;