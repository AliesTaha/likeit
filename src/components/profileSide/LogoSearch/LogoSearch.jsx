import React from 'react'
import Logo from '../../../img/purpalien.png'
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css'

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
        <img src={Logo} width={40} height={40}  alt=""/>
        <div className="Search">
        <input type="text" placeholder='#Explore' />
        <div className="s-icon">
                <UilSearch/>
            </div>
        </div>
    </div>
  )
}

export default LogoSearch