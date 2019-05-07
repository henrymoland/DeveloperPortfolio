import React, { Component } from 'react';

class Post extends Component {

    state = {
        post: null
    }

    componentDidMount() {
       
    };

    render() {
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
            <h4 className="center">Loading...</h4>
        )
        return (
            <div className="container">
                <div>{post}</div>
            </div>
            
        )
    }
}

export default Post;