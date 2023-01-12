import React from "react";
import './KrustyReviews.css'
const krustyImg = require('../../images/krusty.png')

const KrustyReviews = () => {
    return(
        <div className='krusty review'>
            <img src={krustyImg} className='home-krusty-img'/>
        </div>
    )
}

export default KrustyReviews