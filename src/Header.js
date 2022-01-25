import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import logo2 from "./logo2.png"
import logo6 from "./Tacobout_it.png"
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import "./Header.css"
import {Link, useNavigate} from "react-router-dom"
import Avatar from '@mui/material/Avatar';
import GroupIcon from '@mui/icons-material/Group';

const Header = ({ backButton }) => {
    const navigate=useNavigate();

    return (

        <div className="header">
            {/* {backButton ? (
                <IconButton onClick={()=> navigate(-1)}>
                    <ArrowBackIosIcon  className="header__icon" fontSize="large"/>   
                </IconButton>
                ) : (<></>)} */}

            <Link to="/signup">
                <IconButton color="success" sx={{ height: 100, width: 100 }}>
                    <PersonIcon className="header__icon" fontSize='large'/>
                </IconButton> 
            </Link>

            <Link to="/">
                <IconButton color="warning" sx={{ height: 100, width: 100 }}>
                    <img 
                    className="header__logo"
                    src={logo6} 
                    alt="testing commit"/>
                </IconButton>
            </Link>

            <Link to="/info">
                <IconButton color="secondary" sx={{ height: 100, width: 100 }}>
                    <GroupIcon className="header_icon" fontSize="large"/>
                </IconButton>   
            </Link>

            <Link to="/chat">
                <IconButton color="primary" sx={{ height: 100, width: 100 }}>
                    <ForumIcon className="header__icon" fontSize="large"/>
                </IconButton>
            </Link>


        </div>
    )
}

export default Header

