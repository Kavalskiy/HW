import React from 'react'
import './dialog.css'
import { onMessageChange } from "../../data/data";
import Message from './messages/message'
import DialogsItem from './dialogsItem/dialogsItem'
let mesText = React.createRef()



function Dialogs(props) {
  let addMessage = () =>{
    props.addMessage(mesText.current.value)
    mesText.current.value=""
}
  let onMessageChange = () =>{
    props.onMessageChange(mesText.current.value)
    console.log(props.newMessageText)
}
    return (
        <div className="dialogs">
                <div className="dialog">
                  {props.dialogPage.dialogNames.map((e)=><DialogsItem name={e.name} id={e.id} />)}
                </div>
                <div className="messages">
                  {props.dialogPage.messageItems.map((e)=><Message message={e.message} id={e.id} />)}
                </div>
              <div className="code">
                <input type="text"  onChange={onMessageChange} ref={mesText} value={props.newMessageText}></input>
                <button onClick={addMessage}>Отправить</button>
              </div>
            
        </div>
    )
  }
export default Dialogs
