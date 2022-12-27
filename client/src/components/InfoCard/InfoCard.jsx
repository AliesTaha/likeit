import React, { useEffect, useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal.jsx/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//Must import the file 
import * as UserApi from "../../api/UserRequests.js";
import { logout } from "../../actions/AuthActions";

const InfoCard = () => {
  const dispatch = useDispatch()
  const params = useParams();
  const [modalOpened, setModalOpened] = useState(false);
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});

  //Fetching use selector
  const { user } = useSelector((state) => state.authReducer.authData);



  //This is the logout function 
  const handleLogOut = ()=> {
    dispatch(logout())
  }


  //Rendering it correctly
  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        console.log("Fetching data...")
        const profileUser = await UserApi.getUser(profileUserId);
        
        //fetching user from database
        setProfileUser(profileUser);
      }
    };

    //should not render for infinite times, so need user to be chained
    fetchProfileUser();
  }, [user]);

  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Profile Information (you)</h4>
        {user._id === profileUserId ? (
        //Only able to access editing status if it is the user
          <div>
            <UilPen
              width="2rem"
              height="1.2rem"
              onClick={() => setModalOpened(true)}
            />
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              data = {user}
            />
          </div>
        ) : ("")}
      </div>

      <div className="info">
        {/* */}
        <span>
          <b>Works in </b>
        </span>
        <span>{profileUser.worksIn}</span>
      </div>
      <div className="info">
        <span>
          <b>Native Language </b>
        </span>
        <span>{profileUser.nativeLanguage}</span>
      </div>
      <div className="info">
        <span>
          <b>Studies At </b>
        </span>
        <span>{profileUser.studiesAt}</span>
      </div>

      <button className="button logout-button" onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default InfoCard;
