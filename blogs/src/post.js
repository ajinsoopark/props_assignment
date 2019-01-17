import React from 'react';

const Post = ({ id, body, title }) => {
    return (
        <React.Fragment>
            <section id={ id }>
            <h3>{ title }</h3>
            <p>{ body }</p>
            </section>
        </React.Fragment>
    )
}

export default Post;