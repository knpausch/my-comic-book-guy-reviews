import React from "react";
import './LisaReviews.css'
const lisaImg = require('../../images/lisa.png')

const LisaReviews = ({ lisaList }) => {
    const lisaEpisodes = lisaList.map(episode => {
        return(
            <img src={episode.img} className='lisa-thumbnail'/>
        )
    })
    return (
        <div className='lisa review'>
            <img src={lisaImg} className='home-lisa-img' />
            {lisaEpisodes}
        </div>
    )
}

export default LisaReviews