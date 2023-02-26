import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { IoMdNotifications } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiContrastDrop2Fill } from "react-icons/ri";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import secondImg from '../../../images/second.png';
import profileImg from '../../../images/profile.png';
import LayerImg from '../../../images/Layer.png';

function MiddlePart() {
    const borderLeft = {
        borderLeft: '2px solid gray',
        height: '100vh', paddingTop: '25px'
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
                <Col md={9}><p style={{color:'white'}}>Product Details</p></Col>
                <Col md={3}><p style={{color:'white'}}>Home  <AiOutlineArrowLeft />Product Details</p>
                </Col>
            </Row>


            <Container >
                <Row >
                    <Col>
                        <div style={{ height: '350px', width: '350px', backgroundColor: 'black' }}>
                            <img src={secondImg} style={{ height: '340px' }}></img>
                        </div>
                        <br /> <b />
                        <div style={{ backgroundColor: 'black', color: 'white', width: '350px', padding: '5px', borderRadius: '15px', paddingLeft: '2%' }}>
                            <Row>
                                <Col>Winning Bet</Col>
                                <Col>Auction has ended</Col>
                            </Row>


                            <Row >
                                <Col md={2}>
                                    <img src={profileImg} style={{ height: '50px' }}></img>
                                </Col>
                                <Col md={4} style={{ paddingLeft: '8px' }}>
                                    <small>Highest Bid</small> <small style={{ color: 'blue' }}>Socrate</small>
                                </Col>
                                <Col md={6}>
                                    <p style={{ paddingBottom: '5px' }}><small style={{ backgroundColor: 'blue' }}>351 </small>::
                                        <small style={{ backgroundColor: 'blue' }}>00 </small>::
                                        <small style={{ backgroundColor: 'blue' }}>03 </small>::
                                        <small style={{ backgroundColor: 'blue' }}>21 </small></p>
                                    <p >DAY HRS MIN SEC</p>
                                </Col>
                            </Row>
                            <Button style={{ width: '90%', marginLeft: '12px', marginBottom: '2%' }}>PLACE A BUID</Button>
                        </div>
                    </Col>


                    <Col>
                        <h2 style={{ color: 'white' }}>Blue Ellie Parade #2311</h2>

                        <Row>
                            <Col md={3}><Button style={{ backgroundColor: '#2a3330' }}><AiFillEye /> 787</Button></Col>
                            <Col md={3}><Button style={{ backgroundColor: '#2a3330' }}><AiFillHeart /> 203</Button></Col>
                            <Col md={3}><Button style={{ backgroundColor: '#2a3330' }}>...</Button></Col>
                        </Row>

                        <p style={{ color: 'white' }}>Highest bid <span style={{ color: 'blue' }}>0.91 wETH</span> </p>
                        <p style={{ color: 'white' }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium  doloremque laudantium, totam rem aperiam,
                            dfgn ghfjygmbvnvm   hdfgjv n hfcvx</p>



                        <div style={{ backgroundColor: 'black', color: 'white', width: '500px', padding: '10px', paddingLeft: '2%', marginBottom: '8px' }} >
                            <Row >
                                <Col md={2}>
                                    <img src={profileImg} style={{ paddingLeft: '15px', paddingTop: '5px', height: '50px' }}></img>
                                </Col>
                                <Col md={4} style={{ paddingLeft: '15px', color: 'white' }}>
                                    <small>Owner</small><br /> <small>Zuraverse</small>
                                </Col>
                                <Col md={2}>
                                    <img src={profileImg} style={{ paddingTop: '5px', height: '50px' }}></img>
                                </Col>
                                <Col md={4} style={{ color: 'white' }}>
                                    <small>Colection</small> <br /> <small>ZURIAN YOUNGLING</small>
                                </Col>
                            </Row>
                        </div>

                        <div style={{ backgroundColor: 'black', color: 'white', width: '500px', padding: '10px', borderRadius: '15px', paddingLeft: '2%' , marginTop:'10px'}} >
                            <Row >
                                <Col md={3}>
                                    <Button variant="outline-dark" style={{ color: 'white' }}>Details</Button>
                                </Col>
                                <Col md={3} style={{ color: 'white' }}>
                                    <Button variant="dark" style={{ color: 'white', backgroundColor: '#1b1855' }} >Properties</Button>
                                </Col>
                                <Col md={3}>
                                    <Button variant="outline-dark" style={{ color: 'white' }}>Bids</Button>
                                </Col>
                                <Col md={3} style={{ color: 'white' }}>
                                    <Button variant="outline-dark" style={{ color: 'white' }}>History</Button>
                                </Col>
                            </Row>
                        </div>

                       

                        <Row style={{marginTop:'15px'}}>
                            <Col md={6}>
                               <div style={{color:'white'}}>
                               <small>Contact Address</small><br/>
                               <small>Token ID</small><br/>
                               <small>Token Standard</small><br/>
                               <small>Chain</small><br/>
                               <small>MetaData</small><br/>
                               <small>Creator Fee</small><br/>
                               </div>
                            </Col>
                            <Col md={6}>
                            <div style={{color:'white'}}>
                            <small> 0x2953...4963</small><br/>
                               <small> 5452996050965136...</small><br/>
                               <small> ERC-1155</small><br/>
                               <small> Polygon</small><br/>
                               <small> Centralized</small><br/>
                               <small> 5%</small><br/>
                            </div>
                               
                            </Col>
                            
                        </Row> 

                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default MiddlePart