import React, {useState, useEffect} from "react";
import MessageDiv from './MessageDiv';

const MessageArray = ({callToGetMessage}) => {

const[messages, setMessages]= useState([]);



function getMessages (){
    setMessages(messages);
}

function callSubmit (){
    callToGetMessage(getMessages);
}

useEffect(()=>{
fetch('https://ekip-kalir-chat-server.glitch.me/messages')
.then(response=>response.json())
.then(data => setMessages(data))
} ,[]);


  return (
    <div>
        {messages.map(m=>
        <MessageDiv m={m}/>
        )}
    </div>  

  );
};

export default MessageArray;