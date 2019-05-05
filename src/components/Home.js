import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { database } from 'firebase';


class Home extends Component {
    state = {
        posts: []
    }

    componentDidMount(){
        database.on();
    }
    render() {
        console.log(this.props)
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key="post.id" style={{marginBottom: 20,marginRight: "2%", width: "48%", border: "none"}}>
                        <Link to={"/" + post.id}>
                            <img className="card-img-top" src="https://parall.ax/uploads/crop_image/1370/900/20131125154829_DSC_6244-Edit.jpg" alt="post"/>
                        </Link>
                        <div className="card-body">
                            <Link to={"/" + post.id}>
                                <h2 className="card-title" style={{marginLeft: -16}}>{post.title}</h2>
                            </Link>
                            <p className="card-text" style={{marginLeft: -16}}>{post.body}</p>
                        </div>
                       
                    </div>
                )
            })
        ) :  (
            <div className="center">No posts yet</div>
        )

        return (
            <div className="container">
                <h1 className="d-flex justify-content-center" style={{marginTop: 50, marginBottom: 30}}>Daily Blog Post on Web Development</h1>
                <div className="post-list-container" style={{display: "flex", flexWrap: "wrap"}}>
                {postList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);