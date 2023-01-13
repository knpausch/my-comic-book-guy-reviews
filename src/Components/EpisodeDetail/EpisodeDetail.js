import React from "react";
import './EpisodeDetail.css'
import EpisodeSheet from "../EpisodeSheet/EpisodeSheet";
import { useParams } from 'react-router-dom';

const tvImg = require('../../images/tv.png')
const turnBackImg = require('../../images/turn-back.png')

const EpisodeDetail = ({ episodes }) => {

    //FINDS ID AND EPISODE
    let id = parseInt(useParams().id);
    console.log("You entered: ", id)
    const foundEpisode = episodes.find(episode => {
        return episode.id === id
    })
    console.log("Found Episode: ", foundEpisode)

    return (
        <div className='episode-details-and-button-container'>
            <button className='go-back-button'>Go Back <img src={turnBackImg} className='go-back-img' /></button>
            <div className='episode-details-container'>
                <EpisodeSheet
                    airDate={foundEpisode.airDate}
                    description={foundEpisode.description}
                    episodeNum={foundEpisode.episodeNum}
                    id={foundEpisode.id}
                    key={foundEpisode.key}
                    name={foundEpisode.name}
                    popularityRating={foundEpisode.popularityRating}
                    season={foundEpisode.season}
                    img={foundEpisode.img}
                />
                <div className="img-overlay-container">
                    <img src={foundEpisode.img} className='episode-img' />
                    <img src={tvImg} className='tv-img'/>
                </div>
            </div>
        </div>
    )
}

export default EpisodeDetail