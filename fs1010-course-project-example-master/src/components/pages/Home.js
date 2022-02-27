import React from 'react'
import { Container, Row, Col, Button, CardBody, CardTitle, CardText, CardFooter, Card } from 'reactstrap'
import css from "./home.css"
const Home = () => {
    return(
        <Container>
            <Row className="my-5">
                <Col lg="3">
                    <img id="profile" src="https://t3.ftcdn.net/jpg/04/43/35/26/360_F_443352684_jFBzQhRy3drUvmomHyztAnWUyoUhifPG.jpg" alt="" />
                </Col>
                <Col id="box1" Slg="5">
                    
                    <h1 className="font-weight-light">Vadim Ignatov Portfolio</h1>
                    <p>I am a Full Stack web developer student at York University. I am also a licensed Denturist and I work with patients when I am not at work or learning to code!</p>
                    
                        
                    <img id="fb"src="https://cdn-icons-png.flaticon.com/512/4406/4406234.png" ></img>
                    <img id="insta"src="https://cdn-icons-png.flaticon.com/512/4406/4406253.png" ></img>
                    <img id="yt"src="https://cdn-icons-png.flaticon.com/512/4406/4406139.png" ></img>
                    
                </Col>
            </Row>
            <Card className="text-white bg-secondary my-5 py-4 text-center">
                <CardBody>
                    <CardText><p className="text-white m-2">Here is a quick peek at some of the projects I am working on!</p></CardText>
                </CardBody>
            </Card>
            <Row>
                <Col md="4" className="mb-5">
                    <Card>
                        <CardBody>
                            <CardTitle><h2>Group Project</h2></CardTitle>
                            <CardBody>A foto gallery highlighting current world events for the year of 2021. Some of the themes explored are the COVID-19 Pandemic, conflict in Afghanistan as well as the social movements that rocked North America.</CardBody>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" size="sm">See More</Button>
                        </CardFooter>
                    </Card>
                </Col>
                <Col md="4" className="mb-5">
                    <Card>
                        <CardBody>
                            <CardTitle><h2>Photo gallery</h2></CardTitle>
                            <CardBody>Photo Gallery website for city of Toronto. Web page shows major landmarks of the city as well as brief intro about the significance of said monument. Hyperlinks to the City of Toronto social media accounts also present for the users convienience.  </CardBody>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" size="sm">See More</Button>
                        </CardFooter>
                    </Card>
                </Col>
                <Col md="4" className="mb-5">
                    <Card>
                        <CardBody>
                            <CardTitle><h2>To-Do List App</h2></CardTitle>
                            <CardBody>A react based application allowing the user to enter tasks to keep track of day to day activities. The app allows you to delete and or checkoff completed tasks. No matter how many tasks you have the app has got your back to keep you productive.</CardBody>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" size="sm">Try It Now</Button>
                        </CardFooter>
                    </Card>
                </Col>
           
         </Row>
            
        </Container>
    )
}

export default Home