import React, {useRef, useState } from 'react'
import "./Chat.css"
import Avatar from '@mui/material/Avatar'
import {Link} from "react-router-dom"
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import {datebase} from "./firebase"
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


const Chat = ({ name, message, profilePic, timestamp }) => {
    const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();
const dummy = useRef();
const messagesRef = firestore.collection('messages');
const query = messagesRef.orderBy('createdAt').limit(25);
const [user] = useAuthState(auth);
const [messages] = useCollectionData(query, { idField: 'id' });

const [formValue, setFormValue] = useState('');

    return (
       <Link to={`/chat/${name}`}>
       <div className="chat">
            <Avatar className="chat__image" alt={name} src={profilePic}/>
            <div className="chat__details">
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
            <p className="chat__timestamp">{timestamp}</p>
        </div>
        </Link>
    )
}

export default Chat
