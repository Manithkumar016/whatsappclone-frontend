import React, { useState } from 'react';
import {Avatar, IconButton} from '@mui/material';
import './Chat.css';
import SearchIcon from '@mui/icons-material/Search';
import { AttachFile, MoreVert } from '@mui/icons-material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import './App';
import axios from './axios';

function Chat({Messages}) {
const [input,setInput]=useState("");

const  sendMessage = async (e) =>{
  e.preventDefault();
  console.log(input);
  await axios.post('/messages/new',
  {
    "message":input,
    "name":"Manith",
    "timestamp":"Just now",
    "recieved":true
    
  });
  setInput('');
}

  
  return (
    <div className='chatbar'>
      <div className='chat_header'>
          <div className='avtar'>
            <Avatar/>
          </div>
          <div className='chat_headerInfo'>
              <h3>Room Name</h3>
              <p>Last Seen...</p>
          </div>
          <div className='chat_headerRight'>
              <IconButton>
                <SearchIcon/>
              </IconButton>
              <IconButton>
                <AttachFile/>
              </IconButton>
              <IconButton>
                <MoreVert/>
              </IconButton>
          </div>
      </div >
      <div className="chat_body">
          {Messages.map((Messages)=>(
            <p className={`chat_msg ${Messages.recieved && "chat_reciver"}`}>
            <span className='chat_name'>{Messages.name}</span>
            {Messages.message}
            <span className='chat_timestamp'>
              {new Date().toUTCString()}
              {/* {Messages.timestamp} */}
            </span>
            
          </p>
          ))}
          
      </div>
      <div className='Chat_footer'>
        <InsertEmoticonIcon/>
        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Type a message' type='text' />
          <button onClick={sendMessage}  type='submit'>Send Message</button>
        </form>
        <MicIcon/>
      </div>
    </div>
  )
}

export default Chat;
