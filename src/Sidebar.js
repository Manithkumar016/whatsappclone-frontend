import React from 'react'
import './Sidebar.css';
import { Avatar,IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar_header'>
        <Avatar src=""/>
        <div className='sidebar_header_right'>
          <IconButton>
              <ChatIcon/>
          </IconButton>
          <IconButton>
              <DonutLargeIcon/>
          </IconButton>
          <IconButton>
              <MoreVertIcon/>
          </IconButton>
        </div>
      </div>
      <div className='sidebar_search'>
        
            <div className='sidebar_searchcontainer'>
                 <IconButton>
                    <SearchIcon/>
                </IconButton>
                <input  type="text" placeholder='Search'/>
            </div>
        </div>
        <div className='sidebar_chats'>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
        </div>
    </div>
  );
}

export default Sidebar;
