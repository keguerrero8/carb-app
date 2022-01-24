import React, {useState, useEffect } from 'react'
import {useParams} from "react-router-dom"
import "./ChatScreen.css"
import Avatar from '@mui/material/Avatar'



const ChatScreen = ({conversation}) => {
  const {conversation_id} = useParams();
  const [input, setInput] = useState("")
  const [convoUsers, setconvoUsers] = useState({})
  const [messages,setMessages] = useState([
    {
      name: "Date",
      image:
        "https://i.pinimg.com/736x/fc/68/21/fc682105d18bc1c9d859899a7d3fb1f3.jpg",
      message: "Whats up <3",
    },
    {
      name: "",
      image: "https://openclipart.org/image/800px/277082",
      message: "Nothing much, you?",
    },
    {
      name: "Date",
      image:
        "https://i.pinimg.com/736x/fc/68/21/fc682105d18bc1c9d859899a7d3fb1f3.jpg",
      message: "nm I like Bubger Kirg I'm in the mood for a Burger",
    },
  ])

const [messageResponses, setMessageResponses] = useState([
  {
    name: "Date",
    image:
      "https://i.pinimg.com/736x/fc/68/21/fc682105d18bc1c9d859899a7d3fb1f3.jpg",
    message: "Haha! Hey we need to talk...",
  },
  {
    name: "Date",
    image:
      "https://i.pinimg.com/736x/fc/68/21/fc682105d18bc1c9d859899a7d3fb1f3.jpg",
    message: "I slept with your brother.",
  },
  {
    name: "Date",
    image:
      "https://i.pinimg.com/736x/fc/68/21/fc682105d18bc1c9d859899a7d3fb1f3.jpg",
    message: "We shouldn't be together anymore.",
  },
])
const [counter, setCounter] = useState(0)

useEffect(() => {
  fetch(`http://localhost:9292/messages/${conversation_id}`)
  .then((r)=> r.json())
  .then((usrs) => {
      console.log("This is our users data:")
      setMessages(usrs)
  },)
  fetch(`http://localhost:9292/conversations/${conversation_id}`)
  .then((r)=> r.json())
  .then((usrs) => {
      console.log("This is our users data:")
      setconvoUsers(usrs)
  },)
}, [])

  const handleSend = e => {
    e.preventDefault();

    console.log({input})
    setMessages([...messages, {message: input }]);
    handleResponse();
  }

  function handleResponse(){
    setTimeout(function(){
      console.log("Executed after 1 second");
      if(counter < 3){
     setCounter(counter+1); 
     setMessages([...messages, {message: input }, messageResponses[counter]])
      }
     setInput('')
}, 1000);
    
    
    
    console.log(counter)
  }
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp"> YOUR PARAMS</p>
     {messages.map((message) => (
     (message.sender_id !=1) ? (
      <div className="chatScreen__message">
        <Avatar 
          className="chatScreen__image" 
          alt="Other User"
          src={convoUsers.profilepic} />
      <p className="chatScreen__text">{message.message}</p>
    </div>) : (
            <div className="chatScreen__message">
          <p className="chatScreen__textUser">{message.message}</p>
        </div>
    ) ))}
      <form className="chatScreen__input">
        <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="chatScreen__inputField" 
        placeholder="Type a message..."
        type="text"
        />
        <button onClick={handleSend} className="chatScreen__inputButton">SEND</button>
      </form>
    </div>
    
  )


  }

export default ChatScreen;

