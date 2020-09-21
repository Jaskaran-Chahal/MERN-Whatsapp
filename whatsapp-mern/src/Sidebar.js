import React,{useEffect, useState} from 'react';
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {SearchOutlined} from "@material-ui/icons";
import SidebarChat from './SidebarChat';
import db from "./firebase";

function Sidebar() {
const [rooms, setRooms] = useState([]);

useEffect( () => {
    db.collection('rooms')

}, []);

    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <Avatar src="https://avatars1.githubusercontent.com/u/26510691?s=400&u=4bad1e9747960b3f3a2ce8570d1e7a6e97398470&v=4" />
               <div className="sidebar__headerRight">
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
                </div>

            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />    
                    <input placeholder="Search or start new chat" type="text"/>
                </div>      
            </div>

            <div className="sidebar__chats">
                <SidebarChat  addNewChat/>
                <SidebarChat />
                <SidebarChat />
            </div>

        </div>
    )
}

export default Sidebar