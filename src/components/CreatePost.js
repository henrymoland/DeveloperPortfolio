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
        loading: false,
        errors:[]
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

    uploadFileHandler = () => {
        //Upload image to Firebase and return the image url
        const {image} = this.state;
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
    }

    // Form validation to check if all fields are completed
    isFormValid = () => {
        let errors = [];
        let error;

        if(this.isformEmpty(this.state)) {
            error = { message: "Please complete all fields and insert image"};
            this.setState({errors: errors.concat(error)});
            return false;
        } else {
            return true;
        }
    }

    isformEmpty = ({title, body, image, imageURL}) => {
        return !title.length || !body.length || image === null || !imageURL; 
    }

    displayErrors = (errors) => errors.map((error, i) =>
     <p key={i}>{error.message}</p>
     )

     //Submit post
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.isFormValid()) { 
            const {imageURL, title, body} = this.state;
            
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
                progress: 0,
            })
        }
    }

    render() {
        const {title, body, progress, errors } = this.state;
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
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style={{width: `${progress}%`}}></div>
                            </div>
                            <div className="input-group mb-4 mt-4">
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="imageUpload" 
                                    aria-describedby="inputGroupFileAddon01" onChange={this.selectFileHandler} />
                                    <label className="custom-file-label" id="imageUpload">Insert a Image</label>
                                </div>
                            </div>
                            <button className="btn btn-primary btn-block my-4" onClick={this.uploadFileHandler}>Upload Image</button>
                            
                            <button className="btn btn-dark btn-block my-4" type="submit">Save Post</button>
                        
                            <div className=" d-flex justify-content-center error-container">
                            {errors.length > 0 && (
                                <message error className="center">
                                    <p className="h4 error-text">Hmm...Something went wrong. Try posting again.</p>
                                    {this.displayErrors(errors)}
                                </message>
                            )}
                        </div>
                        </form>
                    </div>
                </div>
            </div>  
        )
    }
}

export default Create;