let states = {
profilePage:{
 postsItems: [
    {message: 'Hi, world', likes: 0},
    {message: 'I`m Elon Mask, really', likes: 3},
    {message: 'Give me some bitcoins', likes: 10}
  ],
  newPostText:''

},
dialogPage:{
  dialogNames: [
    {name:'Ivan Ivanov', id: 1},
    {name:'Ilon Mask', id: 2},
    {name:'Bill Gates', id: 2}
  ],
  messageItems: [
    {message:'Hi!', id: 1},
    {message:'Go on the Mars', id: 1},
    {message:'Where is my chip?', id: 1}
  ],
  newMessageText:''
  
},
    usersPage:{
        userName:[
            {name:"Olya", id:1},
            {name:"Gogol", id:2},
            {name:"Ulog", id:3}
        ]
    }
    
}
export let addPost = (postText) =>{
  let newPost={
    message: postText,
    id:4,
    likes:0
  }
  states.profilePage.postsItems.unshift(newPost)
  rerenderTree(states)
} 
export let onPostChange = (text) =>{
  states.profilePage.newPostText = text
  rerenderTree(states)
}
export let addMessage = (mesText) =>{
  let newMessage={
    id:2,
    message:mesText
  }
  let nameMessage={
    name:"Ilon Mask"
  }
  states.dialogPage.messageItems.unshift(newMessage)
  states.dialogPage.dialogNames.unshift(nameMessage)
  rerenderTree(states)
}

export let onMessageChange = (mesText) =>{
  states.dialogPage.newMessageText = mesText
  rerenderTree(states)
  console.log(rerenderTree)
}
let rerenderTree=()=>{
  console.log("It`s fake function")
} 
export let subscribe = (observer)=>{
  rerenderTree = observer
}

export default states;