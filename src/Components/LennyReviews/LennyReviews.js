import React from "react";
import './LennyReviews.css'
const lennyImg = require('../../images/lenny.png')

const LennyReviews = () => {
    return(
        <div className='lenny review'>
            <img src={lennyImg} className='home-lenny-img'/>
        </div>
    )
}

export default LennyReviews