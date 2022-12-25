import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal.jsx/ProfileModal";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>My Profile:</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Works in: </b>
        </span>
        <span><div>Web Development</div></span>
      </div>

      <div className="info">
        <span>
          <b>Native Language: </b>
        </span>
        <span><div>Java</div></span>
      </div>

      <div className="info">
        <span>
          <b>Studies at: </b>
        </span>
        <span><div>University of Waterloo</div></span>
      </div>
      

      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
