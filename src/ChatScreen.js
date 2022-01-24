import React, {useState } from 'react'
import "./ChatScreen.css"
import Avatar from '@mui/material/Avatar'



const ChatScreen = () => {
  const [input, setInput] = useState("")
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
      <p className="chatScreen__timestamp"> YOU MATCHED WITH DATE ON BUBGER KIRG 1/27/22</p>
     {messages.map((message) => (
     message.name ? (
      <div className="chatScreen__message">
        <Avatar 
          className="chatScreen__image" 
          alt={message.name}
          src={message.image} />
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

