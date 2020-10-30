import React,{useState} from "react";

const MessageDiv = ({m}) => {
/* 
const[getMessage, setGetMessage] = useState([{m}]);


function subtractMessage(l){

    setGetMessage(getMessage-deleteMessage)
}

    function deleteMessage(){

         let deleteMessage ={
             id:m.id,
             from:m.from,
             text:m.text
         }
       const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(deleteMessage)
        };

        fetch(`https://ekip-kalir-chat-server.glitch.me/messages/${deleteMessage.id}`, requestOptions)
            .then(x => x.json())
            .then(x => console.log('Message is deleted', x))
            .catch(e => console.log('Error:', e)); */

  /*   } */

function deleteMessage(){

}

  return (
    <div className='message-block-div'>
        <div key={m.id} className='message-block'> 
            <p key={m.id} className='from-element'>From: {m.from}</p>
            <p key={m.text} className='text-element' >Text: {m.text}</p>
        </div>
        <button onClick={deleteMessage}>Delete</button>
    </div>
  );
};

export default MessageDiv;