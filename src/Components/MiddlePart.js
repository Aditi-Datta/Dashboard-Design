import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { IoMdNotifications } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiContrastDrop2Fill } from "react-icons/ri";
import { AiOutlineArrowLeft } from "react-icons/ai";
import secondImg from '../images/second.png';
import profileImg from '../images/profile.png';

function MiddlePart() {
    const borderLeft = {
        borderLeft: '2px solid gray',
        height: '100vh'
    }
   
    return (
        <Container style={borderLeft}>

            <Row>
                <Col md={6}>
                    <Form>

                        <Form.Control type="email" placeholder=" Search by collection or collectible" />
                    </Form>
                </Col>
                <Col md={3}> <Button href="#">A9wtmDd...PSY<IoMdArrowDropdown /></Button> </Col>
                <Col md={2}> <Button href="#"><RiContrastDrop2Fill />2,41 ETH</Button> </Col>
                <Col md={1}> <Button href="#"><IoMdNotifications /></Button> </Col>
            </Row>
            <br />

            <Row>
                <Col md={9}><p >Product Details</p></Col>
                <Col md={3}><p>Home  <AiOutlineArrowLeft />Product Details</p>
                </Col>
            </Row>


            <Container >
                <Row >
                    <Col>
                        <div style={{ height: '350px', width: '350px', backgroundColor: 'black'}}>
                            <img src={secondImg} style={{ height: '340px' }}></img>
                        </div>
                        <br /> <b />
                        <div style={{ backgroundColor: 'black', color: 'white'  ,width: '350px', padding:'5px', borderRadius:'15px', paddingLeft:'2%'}}>
                            <Row>
                                <Col>Winning Bet</Col>
                                <Col>Auction has ended</Col>
                            </Row>

                            
                            <Row >
                            
                                <Col md={2}>
                                    <img src={profileImg} style={{ height: '50px' }}></img>
                                </Col>

                                <Col md={4} style={{paddingLeft:'8px'}}>
                                <small>Highest Bid</small> <small style={{color:'blue'}}>Socrate</small> 
                                </Col>



                                <Col md={6}>
                                
                                <p style={{paddingBottom:'5px'}}><small style={{backgroundColor:'blue'}}>351 </small>::
                                <small style={{backgroundColor:'blue'}}>00 </small>::
                                <small style={{backgroundColor:'blue'}}>03 </small>::
                                 
                                <small style={{backgroundColor:'blue'}}>21 </small></p>
                                <p >DAY HRS MIN SEC</p>
                                </Col>
                            </Row>
                            <Button style={{width:'90%', marginLeft:'12px', marginBottom:'2%'}}>PLACE A BUID</Button>
                            
                        </div>
                    </Col>


                    <Col>
                        <h2>Blue Ellie Parade #2311</h2>
                    </Col>
                </Row>
            </Container>






        </Container>
    )
}

export default MiddlePart