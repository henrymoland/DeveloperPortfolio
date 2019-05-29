import React, { Component } from 'react';

class Contact extends Component {
    constructor(){
        super()
        this.state= {
            name: "",
            email: "",
            message: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submited")
    }
    
    render() {
        const { name, email, message } = this.state;

        return (
            <section id="contact">
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="row">
                            <div className ="col">
                                <h1 className="center section-heading">Get In Touch</h1>
                                <h4 className="center contact-heading">Have a question or want to work together?</h4>
    
                                <div className="form-wrapper">
                                    <form onSubmit={ this.onSubmit }>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Name</label>
                                            <input type="text" className="form-control" id="name" placeholder="Enter your name" value={ name }
                                             onChange={ this.handleChange } />
                                        </div>
    
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value= { email } onChange={ this.handleChange } />
                                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
    
                                        <div class="form-group">
                                            <label for="exampleFormControlTextarea1">Message</label>
                                            <textarea className="form-control" id="message" rows="3" placeholder="Your message..." value={ message } 
                                            onChange ={ this.handleChange }></textarea>
                                        </div>
                                        <div className="btn-container">
                                            <button className="btn btn-light btn-lg my-4 contact-button" type="submit">Get In Touch </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>
        )
    }
}

export default Contact;