import React, {useState, useRef} from 'react'
import "./ChatScreen.css"
import Avatar from '@mui/material/Avatar'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import {database} from "./firebase"
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
   const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


const ChatScreen = () => {
   const [input, setInput] = useState("")
   const [user] = useAuthState(auth);
   const dummy = useRef();
   const messagesRef = firestore.collection('messages');
   const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, { idField: 'id' });

   const [formValue, setFormValue] = useState('');
   const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>           <div className="chatScreen">
  <p className="chatScreen__timestamp"> Discussion</p></div>
    <main>
    
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form className="chatScreen__input" onSubmit={sendMessage}>

      <input 
        className="chatScreen__inputField"
        value={formValue} onChange={(e) => setFormValue(e.target.value)}
        placeholder="Type message..." 
    />

      <button autocomplete="nope" className="chatScreen__inputButton" type="submit" disabled={!formValue}>Send</button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL, name } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'chatScreen__textUser' : 'chatScreen__text';

  return (
    <div className="chatScreen__message">
      <Avatar src={photoURL || 'AF'} />
      <p className={messageClass}>{text}</p>
    </div>
  )


  }

export default ChatScreen;

