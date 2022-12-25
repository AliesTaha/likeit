import React from "react";
import Cover from "../../img/GroupUni.jpg";
import Profile from "../../img/Sitting.JPG";
import "./ProfileCard.css";

const ProfileCard = () => {
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="ProfileName">
        <span>Ali Taha</span>
        <span style={{color: 'var(--thecol)'}}>Computer Engineering Student</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>980</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>451</span>
            <span>Following</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
