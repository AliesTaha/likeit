import React from 'react'
import './TrendCard.css'

import {TrendData} from '../../Data/TrendData.js'
const TrendCard = () => {
  return (
    <div className="TrendCard">
            <h3 style={{color:'white'}} >Trends for you</h3>
            {TrendData.map((trend)=>{
                return(
                    <div className="trend">
                        <span style={{color:'gold'}}>#{trend.name}</span>
                        <span style={{color:'white'}}>{trend.shares}k shares</span>
                    </div>
                )
            })}

    </div>
  )
}

export default TrendCard