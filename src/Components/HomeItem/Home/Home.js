import React from 'react';


import AboutME from '../../Aboutme/AboutME';
import Banner from '../Banner/Banner';
import Services from '../../Servics/Services';
import Projests from '../../Projects/Projests';
import Footer from '../../Footer';
import Contact from '../Contact';
import ScrollAnimation from 'react-animate-on-scroll';


const Home = () => {
    return (
        <div >
            <div className="home" id="home">
                <Banner></Banner>
            <ScrollAnimation animateIn='fadeIn'
        animateOut='fadeOut'>
                    <AboutME></AboutME>
        </ScrollAnimation>
                     
                <ScrollAnimation animateIn='fadeIn'>
                    <Services></Services>
                </ScrollAnimation>
                
                <Projests></Projests>
                <Contact></Contact>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Home;