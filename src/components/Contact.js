import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="row">
                        <div className ="col">
                            <h1 className="center section-heading">Get In Touch</h1>
                            <h4 className="center contact-heading">Have a question or want to work together?</h4>

                            <div className="form-wrapper">
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                                    </div>

                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>

                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">Message</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <div className="btn-container">
                                        <button className="btn btn-light btn-lg my-4 contact-button">Get In Touch </button>
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

export default Contact;