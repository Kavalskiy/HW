import React from "react";
import elon_mini from '../../img/elon_mini.jpg'
function Post(props){
    return(
<div className="post">
    <img src={elon_mini}/> 
    <span>Elon Mask</span>
    <p>{props.message}</p>
    <span className="likes">{props.likes}</span>
</div>
    )
}
export default Post