import React from 'react'
import { Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import logo from "./logo.png"
import logo2 from "./logo2.png"
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import "./Header.css"
import {Link, useNavigate} from "react-router-dom"

const Header = ({ backButton }) => {
    const navigate=useNavigate();

    return (
        //BEM
        <div className="header">
            {backButton ? (
                <IconButton onClick={()=> navigate(-1)}>
                 <ArrowBackIosIcon  className="header__icon" fontSize="large"/>   
                </IconButton>
                ) : (
                    <Link to="/account">
                <IconButton>
                    <PersonIcon className="header__icon" fontSize='large'/>
                </IconButton> 
                </Link>
                )}
            <Link to="/">
            <img 
            className="header__logo"
            src={logo2} 
            alt="CARB Logo"/>
            </Link>
            <Link to="/chat">
            <IconButton>
                 <ForumIcon className="header__icon" fontSize="large"/>
            </IconButton>
            </Link>
            
        </div>
    )
}

export default Header
