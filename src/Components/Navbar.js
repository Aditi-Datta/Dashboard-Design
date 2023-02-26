import React from 'react'
import { Container } from 'react-bootstrap';
import { AiOutlineAppstore, AiOutlineLogout } from "react-icons/ai";
import { GiElephant } from "react-icons/gi";
import { RiAliensLine } from "react-icons/ri";
import { GoSettings } from "react-icons/go";
import { VscColorMode } from "react-icons/vsc";
import { AiOutlineMessage, AiOutlineShoppingCart, AiOutlineClockCircle, AiFillWallet } from "react-icons/ai";

import logoImg from '../images/Logo.png';



function Navbar() {

    return (
        <div>
            <img src={logoImg}></img>
            <Container>
            <ul>
            
            <li style={{listStyleType:'none',color:'white'}}><AiOutlineAppstore /></li>

            <br/>
            
           <li style={{listStyleType:'none',color:'white'}}><AiOutlineMessage /></li><br/>
           
            <li style={{listStyleType:'none',color:'white'}}><AiOutlineAppstore /> </li><br/>
            <li style={{listStyleType:'none',color:'white'}}><AiOutlineMessage /></li><br/>
            <li style={{listStyleType:'none',color:'white'}}><AiOutlineShoppingCart /></li><br/>
            <li style={{listStyleType:'none',color:'white'}}><GiElephant /></li><br/>
            <li style={{listStyleType:'none',color:'white'}}><AiOutlineClockCircle /></li><br/>
            <li style={{listStyleType:'none',color:'white'}}><AiFillWallet /></li><br/>
            <li style={{listStyleType:'none',color:'white'}}><RiAliensLine/></li><br/>
            <li style={{listStyleType:'none',color:'white'}}><GoSettings/></li><br/>
            <li style={{listStyleType:'none',color:'white'}}><AiOutlineLogout/></li><br/>
            <li style={{listStyleType:'none',color:'white'}}><VscColorMode/></li><br/>

            </ul>

            </Container>

            

        </div>
    )
}

export default Navbar