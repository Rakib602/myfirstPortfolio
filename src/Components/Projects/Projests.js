import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import '../Projects/Projects.css';
const Projests = () => {
   
    return (
            <div className="container"id="Projects">
                <h3 className="p-3">My <span className='text-success'>Projects</span></h3>
                <Row xs={1} md={2} lg={3} className="g-4">
                    <Col>
                        <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/sjVHqwm/New-Project-7.png" className="img-fluid"/>
                            <Card.Body>
                                <Card.Title>Bike Selling Website</Card.Title>
                                <Card.Text>
                                1.Single page Website
                                2.FUlly responsive
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/z5dzDKF/New-Project-8.png" className="img-fluid" />
                            <Card.Body>
                                <Card.Title>Food delivary website</Card.Title>
                                <Card.Text>
                                1.Single page Website
                                2.FUlly responsive
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/XS9G1xb/New-Project-9.png" className="img-fluid"/>
                            <Card.Body>
                                <Card.Title>Hospital Wesite</Card.Title>
                                <Card.Text>
                                1.Single page Website
                                2.FUlly responsive
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
    );
};

export default Projests;