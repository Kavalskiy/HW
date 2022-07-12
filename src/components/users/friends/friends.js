import React from "react";
function friends (props){
    return(
        <>
            <div className="friends">
                <div className="img">
                </div>
                <div className="name">
                    <p>{props.userName}</p>
                </div>
            </div>
        </>
    )
}
export default friends;