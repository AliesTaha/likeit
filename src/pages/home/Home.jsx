import React from 'react'
import ProfileSide from '../../components/profileSide/ProfileSide'
import './Home.css'
import PostSide from '../../components/PostSide/PostSide'

const Home = () => {
  return (
    <div className='Home'>
        <ProfileSide/>
        <PostSide/>
        <div className='RightSide'>Rightside</div>
    </div>
  )
}

export default Home