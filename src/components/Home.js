import React from 'react';
import Header from './Header';
import About from './About';
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
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />  
        </>
        )

}
export default Home;