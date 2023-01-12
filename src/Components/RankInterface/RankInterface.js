import React from "react";
import './RankInterface.css'
const krustyButtonImg = require('../../images/krusty.png')
const lisaButtonImg = require('../../images/lisa.png')
const lennyButtonImg = require('../../images/lenny.png')

const RankInterface = () => {
    return(
        <div className='rank-interface-container'>
            <h5>Rank: 1, 2, or 3</h5>
            <img src={krustyButtonImg}/>
            <img src={lisaButtonImg}/>
            <img src={lennyButtonImg}/>
        </div>
    )
}

export default RankInterface