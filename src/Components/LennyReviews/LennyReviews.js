import React from "react";
import './LennyReviews.css'
const lennyImg = require('../../images/lenny.png')

const LennyReviews = ({ lennyList }) => {
    const lennyEpisodes = lennyList.map(episode => {
        return(
            <img src={episode.img} className='lenny-thumbnail'/>
        )
    })
    return (
        <div className='lenny review'>
            <img src={lennyImg} className='home-lenny-img' />
            {lennyEpisodes}
        </div>
    )
}

export default LennyReviews