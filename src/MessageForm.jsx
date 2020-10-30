import React, {useState} from "react";
import MessageArray from "./MessageArray";

const MessageForm = () => {

    let [from, setFrom] = useState("");
    let [text, setText] = useState("");

    const submitForm = () => {

        let message = {
            from: from,
            text: text
        };

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        };

        fetch("https://ekip-kalir-chat-server.glitch.me/messages", requestOptions)
            .then(x => x.json())
            .then(x => console.log('success', x))
            .catch(e => console.log('Error:', e));
    }

   function callToGetMessage(c){
        submitForm(c);
    }

  return (
    <div className='cover-form'>
        <MessageArray callToGetMessage= {callToGetMessage}/>
        <h1 className="h3 mb-3 font-weight-normal">Write the message </h1>
        <br></br>
        <input type="text" name='from' value={from} className="form-control top message" placeholder="From" onChange={e => setFrom(e.target.value)} required autoFocus/>
        <input type="text" name='text' value={text} className="form-control middle message" placeholder="Text" onChange={e => setText(e.target.value)} required autoFocus />
        <button onClick={submitForm} className="btn btn-lg btn-primary btn-block message" type="submit">Submit the message</button>
    </div>
  )
};

export default MessageForm;