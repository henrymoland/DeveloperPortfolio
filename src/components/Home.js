import React from 'react';
import Header from './Header';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import '../style.css';
import aboutImg from '../img/about-img.jpg';


const Home = () => {
        return (
        <>
            <Header />
            <section id="home">
                <div className="container">
                    <div className="about-wrapper">
                        <h1 className="section-heading">About Me</h1>
                        <div className="row">
                        <div className ="col-md">
                        <img src={ aboutImg} alt="..." className="img-fluid about-image" />             
                        </div>
                        <div className ="col-md">
                            <p className="about-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                            
                    </div>
                    </div>
                </div>
            </section>
            <Skills />
            <Projects />
            <Contact />
            <Footer />  
        </>
        )

}
export default Home;