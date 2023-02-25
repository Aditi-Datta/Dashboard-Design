import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import MiddlePart from './MiddlePart';
import backgroundImg from '../images/bg-img.png'
import FirstPart from './FirstPart';

function Home() {
   
    return (



        <div style={{ backgroundImage: `url(${backgroundImg})` }}>
            <Row >
                <Col md={1}><FirstPart></FirstPart></Col>
                <Col md={8}><MiddlePart></MiddlePart></Col>
                <Col md={3}>3 of 3</Col>
            </Row>

        </div>


    )
}

export default Home