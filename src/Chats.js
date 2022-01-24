import React, {useRef, useState, useEffect} from 'react'
import Chat from "./Chat"
import "./Chats.css"

const Chats = ({ conversations, user }) => {
    const scroll = useRef()
    const [messages, setMessages] = useState([])

        
    return (
     <div className="chats">
        

       {conversations.map(conversation => (
    <Chat
        conversation={conversation}
        id={conversation.user_two_id}
        name={conversation.name}
        message={conversation.message}
        timestamp={conversation.timestamp}
        profilePic={conversation.profilepic}
    />


       ))}  

</div>
    )
}
export default Chats
