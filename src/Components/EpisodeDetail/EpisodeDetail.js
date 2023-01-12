import React from "react";
import './EpisodeDetail.css'
import EpisodeSheet from "../EpisodeSheet/EpisodeSheet";
const tvImg = require('../../images/tv.png')
const turnBackImg = require('../../images/turn-back.png')

const EpisodeDetail = () => {
    return (
        <div className='episode-details-and-button-container'>
            <button className='go-back-button'>Go Back <img src={turnBackImg} className='go-back-img'/></button>
            <div className='episode-details-container'>
                <EpisodeSheet />
                <img src={tvImg} />
            </div>
        </div>
    )
}

export default EpisodeDetail