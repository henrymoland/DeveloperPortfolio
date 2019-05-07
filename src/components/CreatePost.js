import React, { Component } from 'react';
import { database } from '../Firebase';
import { storage } from '../Firebase';


class Create extends Component {
    state = {
        image: null,
        imageURL: "",
        title: "",
        body: "",
        progress: 0,
        loading: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    selectFileHandler = (e) => {
        if (e.target.files[0]) {
            const image = e.target.files[0]
            this.setState(() =>({image}))
        } 
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {image, imageURL, title, body} = this.state;
        
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', 
        (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({progress});
        },
        (error) => {
            console.log(error)
        }, 
        () => {
            storage.ref('images').child(image.name).getDownloadURL()
            .then(url => {
                this.setState({
                    imageURL: url
                })
            })
        });

        const post = {
            title: title,
            body: body,
            imageURL: imageURL
        }

        database.push(post);

        this.setState({
            title: "",
            body: "",
            image: null,
            imageURL: "",
            progress: 0
        })
    }

    render() {
        const {title, body, progress, imageURL } = this.state;
        console.log(imageURL)
        return (
            <div className="container">
                <div className="row">
                    <div className="col sm-6 col-sm-offset-3">
                        <form className="text-center border border-light p-5" style={{width: "80%"}} onSubmit={this.handleSubmit}>
                            <p className="h4 mb-4">Create a New Post</p>
                            <input type="text" id="title" className="form-control mb-4" placeholder="Title" value={title} name="title" onChange={this.handleChange} />

                            <div className="form-group grey-border-focus">
                                <textarea className="form-control" id="exampleFormControlTextarea5" rows="4" name="body" onChange={this.handleChange} placeholder="What would you like to post?" value={body}></textarea>
                            </div>

                            <div className="input-group mb-4 mt-4">
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="imageUpload" 
                                    aria-describedby="inputGroupFileAddon01" onChange={this.selectFileHandler}/>
                                    <label className="custom-file-label" id="imageUpload">Upload Image</label>
                                </div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style={{width: `${progress}%`}}></div>
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