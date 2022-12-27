import React, { useState } from "react";
import './Post.css'
import Comment from '../../img/alicom9.png'
import Share from '../../img/share1.png'
import Heart from '../../img/heart10.webp'
import NotLike from '../../img/heart4.webp'
import { useSelector } from 'react-redux'
import { likePost } from "../../api/PostRequests";


const Post = ({data}) => {

  const {user}=useSelector((state)=>state.authReducer.authData)

  const[liked, setLiked] = useState(data.likes.includes(user._id))
  const [likes, setLikes] = useState(data.likes.length)

  const handleLike=()=>{
    //negate previous value
    setLiked((prev)=>!prev)

    //connect it to backend
    likePost(data._id, user._id)
    liked? setLikes((prev)=> prev-1) : setLikes((prev)=>prev+1)
  }
  return (
    <div className="Post">
        <img src={data.image? process.env.REACT_APP_PUBLIC_FOLDER + data.image: ""} alt="" />


 
        <div className="postReact">
            <img src={liked? Heart : NotLike} style={{cursor:"pointer", height:'90%', width:'5%' }} alt="" onClick={handleLike}/>
            <img  src={Comment} style={{height:'100%', width:'5%'}} alt="" />
            <img src={Share} style={{height:'90%', width:'5%'}} alt="" />
        </div>


        <span style={{color: "white", fontSize: '12px'}}>{likes} likes</span>

        <div className="detail">
            <span><b style={{color: "gold"}}>{data.name}</b></span>
            <span style={{color: "white"}}> {data.desc}</span>
        </div>
    </div>
  )
}

export default Post