import React from 'react'
  import './App.css'
  import Header from'./components/header/header.js'
  import Navbar from './components/nav-bar/nav-bar.js'
  import Profile from './components/profil/profil'
  import Dialogs from './components/dialogs/dialog'
  import Users from "./components/users/users"
  import {BrowserRouter, Route, Routes} from 'react-router-dom'


  function App(props) {
    return (
      
        <div className="wrapper">
          <BrowserRouter> 
            <Header/>
            <Navbar/>
            <Routes>
              <Route exact path='/' element={<Profile profilePage={props.states.profilePage} addPost={props.addPost} newPostText={props.states.profilePage.newPostText} onPostChange={props.onPostChange}/>} />
              <Route exact path='/profile' element={<Profile profilePage={props.states.profilePage} addPost={props.addPost} newPostText={props.states.profilePage.newPostText} onPostChange={props.onPostChange}/>} />
              <Route exact path='/dialogs' element={<Dialogs dialogPage={props.states.dialogPage} addMessage={props.addMessage} newMessageText={props.states.dialogPage.newMessageText} onMessageChange={props.onMessageChange}/>} />
              <Route exact path='/users' element={<Users />} />
            </Routes>
          </BrowserRouter> 
        </div>  
    )
  }
export default App
