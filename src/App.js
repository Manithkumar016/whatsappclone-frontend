
import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat.js';
import Sidebar from './Sidebar.js';
import Pusher from 'pusher-js';
import axios from './axios';
// import instance from './axios';
// import { response } from 'express';
// import { Message } from '@mui/icons-material';
function App() {
  const [Messages,setMessages]=useState([]);
  useEffect(()=>{
    axios.get('messages/sync').then((response)=>{
      // console.log(response.data);
      setMessages(response.data);
      // console.log(response.data);
    });
  },[]);

  

useEffect(()=>{
  const pusher = new Pusher('cb789dbf12a31fbb87f7', {
    cluster: 'ap2'
  });

  const channel = pusher.subscribe('message');
  channel.bind('inserted', (newmessage) => {
    setMessages([...Messages,newmessage])
  });

return ()=>{
  channel.unbind_all();
  channel.unsubscribe();
};

},[Messages]);



  return (
    <div className="App">
      <div className='App_body'>
        <Sidebar/>
        <Chat Messages={Messages} />
      </div>
    </div>
  );
}

export default App;
