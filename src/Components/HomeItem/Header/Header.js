import React from 'react';
import '../Header/Header.css';

import { Col, Row } from 'react-bootstrap';
const Header = () => {
    return (
        <div className="container" >
                <Row className="header pt-5">
                <Col xs={12} lg={6} className="header-text">
                        <h1>Hi </h1>
                        <h1>This is Rakib</h1>
                    <p>"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” I belive this to become a good developr.</p>
                    </Col >
                    
                <Col xs={12} lg={6} className="header-img">
                    <img src="https://i.ibb.co/vqPF5ts/New-Project-2-removebg-preview.png" alt=""  className="img-fluid"/>
                </Col>
                <div className="button">
                    <button className='btn'><a href="https://www.linkedin.com/in/rakib-hossan-redoy-732a6a226/" target="_blank">Hire ME</a></button>
                    <button className="btn2"><a href="https://drive.google.com/file/d/1Y6yA7emfKnNKR8XRn0PjDHzLTThmc9Yi/view?usp=sharing" target="_blank">My Resume</a></button>
                </div>
            </Row>
           
           
            </div>
    );
};

export default Header;