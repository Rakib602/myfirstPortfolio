import React from 'react';


import AboutME from '../../Aboutme/AboutME';
import Banner from '../Banner/Banner';
import Services from '../../Servics/Services';
import Projests from '../../Projects/Projests';
import Footer from '../../Footer';
import ScrollAnimation from 'react-animate-on-scroll';
import Contactme from '../../ContactME/Contactme';


const Home = () => {
    return (
        <div >
            <div id="home">
                <Banner></Banner>
            <ScrollAnimation animateIn='fadeIn'
        animateOut='fadeOut'>
                    <AboutME></AboutME>
        </ScrollAnimation>
                     
                <ScrollAnimation animateIn='fadeIn'>
                    <Services></Services>
                </ScrollAnimation>
                
                <Projests></Projests>
                <Contactme></Contactme>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Home;