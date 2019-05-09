import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { database } from '../Firebase';
import _ from 'lodash';
import renderHTML from 'react-render-html';
import '../style.css';

class Home extends Component {
    state = {
        posts: {}
    }

    componentDidMount(){
        database.on('value', (snapshot) => {
            this.setState({
                posts: snapshot.val()
            });
       });
    }

    renderPost() {
        return _.map(this.state.posts, (post) => {
            return (
                <div className="post card" key="post.id" style={{marginBottom: 20, width: "80%", border: "none"}}>
                    <Link to={"/" + post.id}>
                        <img className="card-img-top" src={post.imageURL || "https://via.placeholder.com/75"} alt="post"/>
                    </Link>
                    <div className="card-body">
                        <h1 className="card-title" style={{textAlign: "center"}}>{post.title}</h1>
                        <p className="card-text" style={{marginLeft: -16, marginTop: 50}}>{renderHTML(post.body)}</p>
                    </div> 
                </div>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <h1 className="d-flex justify-content-center display-4 heading-text" id="blog-heading" style={{marginTop: 50, marginBottom: 30}}>Daily Blog Post on Web Development</h1>
                <div className="post-list" style={{display: "flex", flexDirection: "column"}}>
                    {this.renderPost()}
                </div>
            </div>
        )

    }
}



export default(Home);