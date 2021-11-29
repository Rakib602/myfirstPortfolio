import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Typical from 'react-typical';
import '../Aboutme/AboutUS.css'
const AboutME = () => {
    return (
        <div className="container">
            <Row className='about'>
                <h2 className="p-4"><span>About</span> Me</h2>
                <Col xs={12} lg={6}>
                    <img src="https://i.ibb.co/ZJTKp1S/New-Project-3.png" alt="" className="img-fluid" />
                </Col>
                <Col xs={12} lg={6} className="about-text pt-4">
                    <h4>I'm <span>Rakib Hossan Redoy</span></h4>
                    <h5>
                        <Typical
                            loop={Infinity}
                            steps={['  I am a Web Developer', 1000,
                                '  I am a Web designer', 1000,
                                '  I am a React Developer', 1000]}
                        /></h5>
                    <p >I am a student of Computer Science and Engineering (CSE) from Southern University Bangladesh.  Every time to learn something new is my passion. I think web development is one of the best way to learn new thing because if we develop a web application it helps to think new thing.  So for this reason I want to build my career as Web Developer or Software Developer.</p>
                    
                </Col>
            </Row>

        </div>
    );
};

export default AboutME;