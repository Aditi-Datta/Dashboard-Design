import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import bgImg from '../../../images/Layer9.png'
import ThirdImg from '../../../images/3rd-img.png'
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import secondImg from '../../../images/second.png';
import sImg from '../../../images/Layer4.png';

function ThirdPart() {
  const borderLeft = {
    borderLeft: '2px solid gray',
    height: '100vh', paddingTop: '25px'
  }

  const bgImage = {
    backgroundImage: `url(${bgImg})`,
  }
  return (
    <Container style={borderLeft}>

      <div style={bgImage} >

        <img src={ThirdImg}></img>
        <h2 style={{ color: 'white', textAlign: 'center' }}>Marcus Aurelius</h2>

        <Container>
          <Row>
            <Col md={3}><Button>120</Button></Col>
            <Col md={3}><Button>10K</Button></Col>
            <Col md={3}><Button>70K</Button></Col>
            <Col md={3}><Button>60</Button></Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col md={3}><p style={{ color: 'gray' }}>Asset</p></Col>
            <Col md={3}><p style={{ color: 'gray' }}>Follwers</p></Col>
            <Col md={3}><p style={{ color: 'gray' }}>Likes</p></Col>
            <Col md={3}><p style={{ color: 'gray' }}>Bidding</p></Col>
          </Row>
        </Container>
        </div>

        <Row>
          <Col md={8}><h5 style={{ color: 'white' }}>Recent Activity</h5></Col>
          <Col md={4}><p style={{ color: '#2a3330' }}>See All <AiOutlineArrowRight /></p></Col>
        </Row>

        <div style={{ backgroundColor: '#3b3b59', marginTop: '10px', borderRadius: '10px' }}>
          <Row>
            <Col md={2}><img src={secondImg} style={{ height: '70px' }}></img></Col>
            <Col md={6}><small style={{ color: 'white', paddingLeft: '15px' }}>Blue Ellie ....</small> <br />
              <small style={{ color: 'white', paddingLeft: '15px' }}>owned by</small><br />
              <small style={{ color: '#2fa1f5', paddingLeft: '15px' }}>Marcus Aurelius</small>
            </Col>

            <Col md={4}><small style={{ color: '#2fa1f5' }}>6m ago</small></Col>
          </Row>

        </div>

        <div style={{ backgroundColor: '#3b3b59', marginTop: '20px', borderRadius: '10px' }}>
          <Row>
            <Col md={2}><img src={sImg} style={{ height: '70px' }}></img></Col>
            <Col md={6}><small style={{ color: 'white', paddingLeft: '15px' }}>Blue Ellie ....</small> <br />
              <small style={{ color: 'white', paddingLeft: '15px' }}>owned by</small><br />
              <small style={{ color: '#2fa1f5', paddingLeft: '15px' }}>Marcus Aurelius</small>
            </Col>

            <Col md={4}><small style={{ color: '#2fa1f5' }}>3d ago</small></Col>
          </Row>

        </div>

       

        <div style={{marginBottom:'10px',marginTop:'10px'}}>
        <Row>
        <Col md={6} style={{ color: 'white' }}>
          <Button  variant="outline-dark" style={{ color: 'white',backgroundColor:'#2a3330', paddingLeft:'14%', paddingRight:'14%' }} > <FaDiscord/> Discord</Button>
        </Col>
        <Col md={6} style={{ color: 'white' }}>
          <Button  variant="outline-dark" style={{ color: 'white',backgroundColor:'#2a3330', paddingLeft:'14%', paddingRight:'14%'  }} > <AiOutlineTwitter/> Twitter</Button>
        </Col>
      </Row>
        </div>

        <Row>
          <Col md={6} style={{ color: 'white' }}>
            <Button  variant="outline-dark" style={{ color: 'white',backgroundColor:'#2a3330', paddingLeft:'8%', paddingRight:'9%'  }} > <AiFillInstagram/> Instagram</Button>
          </Col>
          <Col md={6} style={{ color: 'white',}}>
            <Button  variant="outline-dark" style={{ color: 'white' ,backgroundColor:'#2a3330', paddingLeft:'11%', paddingRight:'11%' }} > <AiFillYoutube/> Youtube</Button>
          </Col>
        </Row>


        <p style={{color:'white', paddingTop:'80px', textAlign:'center'}}>©2022 Zuraverse. All rights reserved.</p>
      


    </Container>
  )
}

export default ThirdPart