import React from "react";
import './LisaReviews.css'
const lisaImg = require('../../images/lisa.png')

const LisaReviews = () => {
    return(
        <div className='lisa review'>
            <img src={lisaImg} className='home-lisa-img'/>
        </div>
    )
}

export default LisaReviews