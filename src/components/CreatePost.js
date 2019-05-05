import React, { Component } from 'react';
import { database } from '../Firebase';

class Create extends Component {
    state = {
        image: "",
        imageURL: "",
        title: "",
        body: "",
        loading: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    uploadImageHandler = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                image: file,
                imageURL: reader.result
            });
        };
        reader.readAsDataURL(file);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body,
            imageURL: this.state.imageURL
        }
        database.push(post);
        this.setState({
            title: "",
            body: "",
            image: "",
            imageURL: ""
        })

        console.log(this.state)
    }

    render() {
        const {image, title, body} = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col sm-6 col-sm-offset-3">
                        <form className="text-center border border-light p-5" style={{width: "80%"}} onSubmit={this.handleSubmit}>
                            <p className="h4 mb-4">Create a New Post</p>
                            <input type="text" id="title" className="form-control mb-4" placeholder="Title" value={title} name="title" onChange={this.handleChange} />

                            <textarea className="form-control rounded-0" id="text-body" rows="10" placeholder="What would you like to post?" value={body} name="body" onChange={this.handleChange}></textarea>

                            <div className="input-group mb-4 mt-4">
                            <div className="input-group-prepend">
                                <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                            </div>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="imageUpload"
                                aria-describedby="inputGroupFileAddon01" onChange={this.uploadImageHandler}/>
                                <label className="custom-file-label" id="imageUpload">Upload Image</label>
                            </div>
                            </div>

                            <button className="btn btn-info btn-block my-4" type="submit">Create Post</button>
                        </form>
                    </div>
                </div>
            </div>  
        )
    }
}


export default Create;