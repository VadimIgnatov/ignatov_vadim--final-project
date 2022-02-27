import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

const About = () => {
    return (
        <Container>
        <Row className="my-1">
            <Col lg="10">
                <img className="img-fluid rounded mb-4 mb-lg-0" src="" alt="" />
            </Col>
            <Col id="one" lg="5">
                <h1 className="font-weight-light">Who am I?</h1>
            </Col>
            <Col id="two" lg="5">
                <h1 className="font-weight-light">Education</h1>
                <p><li>York University   21-22</li>
                <li>George Brown College 16-19</li>
                <li>University of Ottawa 13-15</li> </p>
                <Button color="primary" href="/contact">Contact Me</Button>
            </Col>
            <Col id="three" lg="5">
                <h1 className="font-weight-light">Work</h1>
                <p>Currently working full time at FedEx as a courier and part time as a Denturist. Working to change my career and become a web developer! Taking one small set at a time towards my goals. </p>
                <Button color="primary" href="/contact">Contact Me</Button>
            </Col>
            <Col id="four" lg="5">
                <h1 className="font-weight-light">Interests</h1>
                <p>I like to draw but I wouldnt say that I am any good, I do enjoy some video games especially RTS. Since I was a kid I enjoed building and learning about computers and I have build several  systems over the years. </p>
                <Button color="primary" href="/contact">Contact Me</Button>
            </Col>
            
        </Row>
    </Container>
    )
}

export default About