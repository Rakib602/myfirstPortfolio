import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Card, Col, Row } from 'react-bootstrap';
import '../Servics/Services.css'
const Services = () => {
    return (
        <div className="container" id="Services">
            <h3 className="p-3">My <span className='text-primary'>Services</span></h3>
            <Row xs={1} md={2} lg={3} className="g-4">
                <ScrollAnimation animateIn='fadeIn'
                    animateOut='fadeOut'>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://i.ibb.co/XjBfRJk/New-Project-6.png" />
                            <Card.Body>
                                <Card.Title>Web Design</Card.Title>
                                <Card.Text>
                                    I design your site as your requirmnet and minimalistic.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </ScrollAnimation>
                   
                <ScrollAnimation animateIn='fadeIn'
                    animateOut='fadeOut'>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://i.ibb.co/kqjfQgv/New-Project-5.png" />
                            <Card.Body>
                                <Card.Title>Web Development</Card.Title>
                                <Card.Text>
                                    I develop your site as your requirmnet and also fully responsive.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </ScrollAnimation>
               
                <ScrollAnimation animateIn='fadeIn'
                    animateOut='fadeOut'>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://i.ibb.co/5rnpBTk/New-Project-4.png" />
                            <Card.Body>
                                <Card.Title>App Development</Card.Title>
                                <Card.Text>
                                    I develp your app as your requirmnet. I also develop androaid and ios app.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </ScrollAnimation>
                
            </Row>
        </div>
    );
};

export default Services;