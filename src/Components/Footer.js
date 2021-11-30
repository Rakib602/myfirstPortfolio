import React from 'react';
import { Col, Container,Row } from 'react-bootstrap';
import { BsFillTelephoneFill, BsYoutube } from 'react-icons/bs';
import { ImFacebook2 } from 'react-icons/im';
import { AiFillTwitterCircle } from 'react-icons/ai';
const Footer = () => {
    return (
        <div className='bg-dark text-light pt-5'>
            <Container>
                <Row>
                    <Col xs={12} md={6} >
                        <h5>Contact US</h5>
                        <p>SitaKunda,Chattogram,Bangladesh</p>
                        <p><BsFillTelephoneFill /> 01857609102</p>
                        <p><BsFillTelephoneFill /> 01641401306</p>

                    </Col>
                    
                    <Col xs={12} md={6} className="pb-3">

                        <h5 className="pb-3 pt-3">Follow Us</h5>
                        <a href="https://www.facebook.com/" className="px-3"><ImFacebook2 color="sky-blue" size="30px" /></a>
                        <a href="https://twitter.com/" className="px-3"> <AiFillTwitterCircle color="sky-blue" size="30px" /></a>
                        <a href="https://www.youtube.com/" className="px-3"><BsYoutube color="red" size="30px" /></a>
                    </Col>
                </Row>
                <p className="pb-2 m-0">Copyright ©2021 All rights reserved by Rakib Hossan</p>
            </Container>
        </div>
    );
};

export default Footer;