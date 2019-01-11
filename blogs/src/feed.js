import React from 'react';
import Post from './post';

const Feed = props => {
    console.log(props.allPosts)
let posts = props.allPosts.map(post => {
    return (
        <Post 
        id={post.id}
        title={post.id}
        body={post.body}
        />
    )
});
    return (
        <React.Fragment>
            { posts }
        </React.Fragment>
    )
}

export default Feed;