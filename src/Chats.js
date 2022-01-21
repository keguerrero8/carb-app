import React, {useRef, useState, useEffect} from 'react'
import Chat from "./Chat"
import {database} from "./firebase"



import { useCollectionData } from 'react-firebase-hooks/firestore';
import "./Chats.css"

const Chats = ({ user }) => {
    const scroll = useRef()
    const [messages, setMessages] = useState([])

        
    return (
     <div className="chats">
        

         
    <Chat
        name="Discussion"
        message="Date with Cait"
        timestamp="2 seconds ago"
        profilePic="https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/91050176_10219407898460070_8343775318888153088_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=WZ3jTs5mfH8AX80e273&tn=bBofImXvv_8LeHCO&_nc_ht=scontent-iad3-2.xx&oh=00_AT85zFnka-tt8eA6ARaSfQYPIZFTDz93heVWUQsPpQJfEQ&oe=620A7EC1"
    />
<p>User:</p>{user?.email}
</div>
    )
}
export default Chats
