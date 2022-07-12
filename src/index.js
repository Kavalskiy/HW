import states from "./data/data"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost,onPostChange,onMessageChange,addMessage,subscribe} from "./data/data"



const root=ReactDOM.createRoot(document.getElementById("root"))

let rerenderTree=(states)=>{
root.render(
  <React.StrictMode>
    <App 
    states={states}
    onPostChange={onPostChange}
    onMessageChange={onMessageChange}
    addMessage={addMessage}
    addPost ={addPost}
    />
  </React.StrictMode>,
);
}
rerenderTree(states)
subscribe(rerenderTree)
reportWebVitals();
