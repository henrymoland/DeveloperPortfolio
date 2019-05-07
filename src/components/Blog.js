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
                <div className="post card" key="post.id" style={{marginBottom: 20,marginRight: "2%", width: "48%", border: "none"}}>
                    <Link to={"/" + post.id}>
                        <img className="card-img-top" src={post.imageURL || "https://via.placeholder.com/75"} alt="post"/>
                    </Link>
                    <div className="card-body">
                        <Link to={"/" + post.id}>
                            <h2 className="card-title" style={{marginLeft: -16}}>{post.title}</h2>
                        </Link>
                        <p className="card-text" style={{marginLeft: -16}}>{renderHTML(post.body)}</p>
                    </div> 
                </div>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <h1 className="d-flex justify-content-center" style={{marginTop: 50, marginBottom: 30}}>Daily Blog Post on Web Development</h1>
                <div className="post-list-container" style={{display: "flex", flexWrap: "wrap"}}>
                    {this.renderPost()}
                </div>
            </div>
        )

    }
}



export default(Home);