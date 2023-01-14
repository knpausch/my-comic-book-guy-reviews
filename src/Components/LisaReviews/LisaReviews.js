import React from "react";
import './LisaReviews.css'
const lisaImg = require('../../images/lisa.png')

const LisaReviews = ({ lisaList }) => {
    const lisaEpisodes = lisaList.map(episode => {
        return (
            <img src={episode.img} className='mini-thumbnail' />
        )
    })
    return (
        <div className='lisa review' id='lisa-review-container'>
            <img src={lisaImg} className='home-lisa-img' />
            <div className="mini-lisa-container">
                {lisaEpisodes}
            </div>
        </div>
    )
}

export default LisaReviews