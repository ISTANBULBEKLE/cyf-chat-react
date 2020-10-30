import React from "react";

const MessageDiv = ({m}) => {

  return (
    <div className='message-block-div'>
        <div className='message-block'> 
            <p>{m.from}</p>
            <p>{m.text}</p>
        </div>
        <button >Delete</button>
    </div>
  );
};

export default MessageDiv;