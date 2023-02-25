import React from 'react'
import { Container } from 'react-bootstrap';
import { AiOutlineAppstore, AiOutlineLogout } from "react-icons/ai";
import { GiElephant } from "react-icons/gi";
import { RiAliensLine } from "react-icons/ri";
import { GoSettings } from "react-icons/go";
import { VscColorMode } from "react-icons/vsc";
import { AiOutlineMessage, AiOutlineShoppingCart, AiOutlineClockCircle, AiFillWallet } from "react-icons/ai";

import logoImg from '../images/Logo.png';


function FirstPart() {

    

    return (
        <div>


            <img src={logoImg}></img>


            <Container>
            <ul><li style={{listStyleType:'none'}}><AiOutlineAppstore /></li><br/>
            <li style={{listStyleType:'none'}}><AiOutlineMessage /></li><br/>
           
            <li style={{listStyleType:'none'}}><AiOutlineAppstore /> </li><br/>
            <li style={{listStyleType:'none'}}><AiOutlineMessage /></li><br/>
            <li style={{listStyleType:'none'}}><AiOutlineShoppingCart /></li><br/>
            <li style={{listStyleType:'none'}}><GiElephant /></li><br/>
            <li style={{listStyleType:'none'}}><AiOutlineClockCircle /></li><br/>
            <li style={{listStyleType:'none'}}><AiFillWallet /></li><br/>
            <li style={{listStyleType:'none'}}><RiAliensLine/></li><br/>
            <li style={{listStyleType:'none'}}><GoSettings/></li><br/>
            <li style={{listStyleType:'none'}}><AiOutlineLogout/></li><br/>
            <li style={{listStyleType:'none'}}><VscColorMode/></li><br/>

            </ul>

            </Container>

            

        </div>
    )
}

export default FirstPart