import React from "react";
import { useSelector } from "react-redux";
import Cover from "../../img/GroupUni.jpg";
import Profile from "../../img/Sitting.JPG";
import {Link} from 'react-router-dom'
import "./ProfileCard.css";

const ProfileCard = ({location}) => {
  const {user} = useSelector((state)=>state.authReducer.authData)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const posts= useSelector((state)=>state.postReducer.posts)

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={user.coverPicture? serverPublic + user.coverPicture: serverPublic+ "alienback.jpeg"} alt="" />
        
        <img src={user.profilePicture? serverPublic + user.profilePicture: serverPublic+ "alienprof.jpeg"} alt="" />
      </div>

      <div className="ProfileName">
        <span>{user.firstname}</span>
        <span style={{color: 'var(--thecol)'}}>{user.worksIn? user.worksIn: "Tell us more about you"}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Following</span>
          </div>

          {location=== 'profilePage' && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>{posts.filter((post)=>post.userId===user._id).length}</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location=== 'profilePage' ? ("") : (<span>
        <Link style={{color:"wheat", fontSize:'18px', textDecoration: "none"}} to ={`/profile/${user._id}`}>
        My profile
        </Link></span>)
        }
    </div>
  );
};

export default ProfileCard;
