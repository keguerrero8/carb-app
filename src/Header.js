import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import logo2 from "./logo2.png"
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import "./Header.css"
import {Link, useNavigate} from "react-router-dom"
import Avatar from '@mui/material/Avatar';
import GroupIcon from '@mui/icons-material/Group';

const Header = ({ backButton, rubyUser }) => {
    const navigate=useNavigate();

    return (

        <div className="header">
            {backButton ? (
                <IconButton onClick={()=> navigate(-1)}>
                 <ArrowBackIosIcon  className="header__icon" fontSize="large"/>   
                </IconButton>
                ) : (
                    <Link to="/signup">
                <IconButton>
                    {rubyUser ? (<Avatar /> ): (<PersonIcon className="header__icon" fontSize='large'/>)}
                </IconButton> 
                </Link>
                )}

            <Link to="/">
                <img 
                className="header__logo"
                src={logo2} 
                alt="testing commit"/>
            </Link>

            <Link to="/info">
                <IconButton>
                    <GroupIcon className="header_icon" fontSize="large"/>
                </IconButton>   
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

