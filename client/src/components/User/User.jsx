import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { followUser, unfollowUser } from "../../actions/UserAction";


const User = ({ person }) => {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch()
  

  //This is for following
  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );
  
  //This button handles follows
  const handleFollow = () => {
    following
      ? dispatch(unfollowUser(person._id, user))
      : dispatch(followUser(person._id, user));
    setFollowing((prev) => !prev);
  };

  //This returns
  return (
    <div className="follower">
      <div>
        <img
          src={
               person.profilePicture
              ? serverPublic + person.profilePicture
              : serverPublic + "alienprof.jpeg"
          }
          alt="profile"
          className="followerImage"
        />
        <div className="name">
          <span style={{color: "gold"}}>{person.firstname}</span>
          <span>{person.username}</span>

        </div>
      </div>
      <button
        className={
          
          //If following is true, unfollow, if unfollowing is true, follow
          following ? "button fc-button UnfollowButton" : "button fc-button"
        
        } onClick={handleFollow}>
       
        {following ? "Unfollow" : "Follow"}
      
      </button>
    </div>
  );
};

export default User;
 