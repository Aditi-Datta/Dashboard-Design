import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import MiddlePart from './MiddlePart';
import backgroundImg from '../../images/bg-img.png'
import ThirdPart from './ThirdPart';
import Navbar from './Navbar';

function Properties() {
   
    return (



        <div style={{ backgroundImage: `url(${backgroundImg})` , height:'100vh', width:'100vw',backgroundRepeat:"no-repeat",backgroundSize: 'cover',backgroundColor: 'rgba(0, 0, 0, 0.6)',  }}>
            <Row >
                <Col md={1}><Navbar></Navbar></Col>
                <Col md={8}><MiddlePart></MiddlePart></Col>
                <Col md={3}><ThirdPart></ThirdPart></Col>
            </Row>

        </div>


    )
}

export default Properties