import React from 'react'
import './Post.css'
import Comment from '../../img/alicom9.png'
import Share from '../../img/share1.png'
import Heart from '../../img/heart10.webp'
import NotLike from '../../img/heart4.webp'


const Post = ({data}) => {
  return (
    <div className="Post">
        <img src={data.img} alt="" />


        <div className="postReact">
            <img src={data.liked? Heart : NotLike} style={{height:'90%', width:'5%'}} alt="" />
            <img  src={Comment} style={{height:'100%', width:'5%'}} alt="" />
            <img src={Share} style={{height:'90%', width:'5%'}} alt="" />
        </div>


        <span style={{color: "white", fontSize: '12px'}}>{data.likes} likes</span>

        <div className="detail">
            <span><b style={{color: "gold"}}>{data.name}</b></span>
            <span style={{color: "white"}}> {data.desc}</span>
        </div>
    </div>
  )
}

export default Post