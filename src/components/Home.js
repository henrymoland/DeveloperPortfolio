import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class Home extends Component {
    state = {
        posts: []
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            this.setState({
                posts: res.data.slice( 0, 10)
            })
        })
    }

    render() {

        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key="post.id" style={{marginBottom: 20}}>
                        <div className="card-body">
                            <Link to={"/" + post.id}>
                                <h5 className="card-title">{post.title}</h5>
                            </Link>
                            <p className="card-text">{post.body}</p>
                        </div>
                       
                    </div>
                )
            })
        ) :  (
            <div className="center">No posts yet</div>
        )

        return (
            <div className="container">
                <h1 className="d-flex justify-content-center">Home</h1>
                {postList}
            </div>
        )
    }
}

export default Home;