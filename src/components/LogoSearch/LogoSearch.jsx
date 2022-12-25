import React from 'react'
import Logo from '../../img/aliencomment.webp'
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css'

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
        <img src={Logo} width={40} height={40}  alt=""/>
        <div className="Search">
        <input type="text" placeholder='#Lookforaliens' />
        <div className="s-icon">
                <UilSearch color="#000000"/>
            </div>
        </div>
    </div>
  )
}

export default LogoSearch