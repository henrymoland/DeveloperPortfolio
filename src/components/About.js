import React from 'react';
import aboutImg from '../img/about-img.jpg';

const About = () => {
    return (
    <section id="about">
        <div className="container">
            <div className="about-wrapper">
                <h1 className="section-heading">About Me</h1>
                <div className="row">
                    <div className ="col-md">
                    <img src={ aboutImg} alt="..." className="img-fluid about-image" />             
                    </div>
                    <div className ="col-md">
                        <p className="about-text">As a student at Lambda School, I am training to become a Full Stacks Web Developer. I aspire to create beautiful web and mobile applications that not only provide a great user experience but clean code as well. During my free time I enjoy working on personal web/mobile projects, bowling, creating music and spending time with my family.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>   
    )
}

export default About;







