import React, {useState, useRef} from 'react'
import "./ChatScreen.css"
import Avatar from '@mui/material/Avatar'



const ChatScreen = () => {
  

  return (
    <div className="chatScreen__message">
      <Avatar src={'AF'} />
      <p className="messageClassPlaceholder">Message</p>
    </div>
  )


  }

export default ChatScreen;

