import React, { Component } from 'react';
import { database } from '../Firebase';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


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
            body: e
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
    }

    render() {
        const {image, title, body} = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col sm-6 col-sm-offset-3">
                        <form className="text-center border border-light p-5" style={{width: "80%"}} onSubmit={this.handleSubmit}>
                            <p className="h4 mb-4">Create a New Post</p>
                            <input type="text" id="title" className="form-control mb-4" placeholder="Title" value={title} name="title" onChange={e => { this.setState({ title: e.target.value})}} />

                            <ReactQuill modules={Create.modules} formats={Create.formats} placeholder="What would you like to post?" value={body} name="body" onChange={this.handleChange} />

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

Create.modules = {
    toolbar: [
        [{header: "1"}, { header: "2"}, { font: []}],
        [{size: []}],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{"list": "ordered"}, {"list": "bullet"}],
        ["link", "image", "video"],
        ["clean"],
        ["code-block"]
    ]
};

Create.formats = [
    "header", "font", "size", "bold", "italic", "underline", "strike", "blockquote", "list",
    "bullet", "link", "image", "video", "code-block" , "clean"
]

export default Create;