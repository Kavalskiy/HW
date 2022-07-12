import React from "react";
import logo from '../img/logo.svg';
import './header.css';
function header(){
    return(
        <div className = "header">
            <img src={logo}/>
        </div>
    )
}
export default header