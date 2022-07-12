import React from "react";
import './navbar.css'
import {NavLink} from 'react-router-dom'
function navbar(){
    return(
        <div className = "navbar">
            <ul>
                <li><NavLink to='/profile'>Profile</NavLink></li>
                <li><NavLink to='/dialogs'>Messages</NavLink></li>
                <li><NavLink to='/users'>Users</NavLink></li>
            </ul>
        </div>
    )
}
export default navbar