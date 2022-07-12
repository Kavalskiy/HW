import React from "react";
import { onPostChange } from "../../../data/data";
import Post from '../posts/post'
let postText = React.createRef()

function Posts(props){
    let addPost = () =>{
        props.addPost(postText.current.value)
        postText.current.value=""
    }
    let onPostChange = () =>{
        props.onPostChange(postText.current.value)
    }
return(
<>
<div className="posts">
    <h1>My Posts</h1>
    <input placeholder="Enter new post" ref={postText} value={props.newPostText} onChange={onPostChange}></input>
    <button onClick={addPost}>Add post</button>
    {props.postsItems.map((e)=> <Post message = {e.message} id = {e.id} likes={e.likes} />)}
</div>
</>
)
}
export default Posts