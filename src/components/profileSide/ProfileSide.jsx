import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch.jsx'
import ProfileCard from '../ProfileCard/ProfileCard.jsx'
import "./ProfileSide.css"
import FollowersCard from '../FollowersCard/FollowersCard.jsx'


const ProfileSide = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <ProfileCard/>
        <FollowersCard/>
    </div> 

  )
}

export default ProfileSide