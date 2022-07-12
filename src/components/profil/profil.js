import React from "react";
import Posts from './posts/posts.js'
import './profil.css'
import ProfileInfo from "./profilInfo/profilInfo";
function profil(props){
    return(
        <>
    <div className='profil'>
      <ProfileInfo />
      <Posts postsItems={props.profilePage.postsItems} addPost={props.addPost} newPostText={props.newPostText} onPostChange={props.onPostChange}/>
    </div>  
        </>
    )
}
export default profil
