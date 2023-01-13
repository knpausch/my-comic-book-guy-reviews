import React from "react";
import './EpisodeDetail.css'
import EpisodeSheet from "../EpisodeSheet/EpisodeSheet";
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

const tvImg = require('../../images/tv.png')
const turnBackImg = require('../../images/turn-back.png')

const EpisodeDetail = ({ currentEpisode }) => {

    //FINDS ID AND EPISODE
    // let id = parseInt(useParams().id);
    // console.log("You entered: ", id)
    // const foundEpisode = episodes.find(episode => {
    //     return episode.id === id
    // })
    // console.log("Found Episode: ", foundEpisode)

    // const foundEpisode = episodes[0]

    return (
        <div className='episode-details-and-button-container'>
            <NavLink to={`/`}>
                <button className='go-back-button'>Home</button>
            </NavLink>
            <div className='episode-details-container'>
                <EpisodeSheet
                    airDate={currentEpisode.airDate}
                    description={currentEpisode.description}
                    episodeNum={currentEpisode.episodeNum}
                    id={currentEpisode.id}
                    key={currentEpisode.key}
                    name={currentEpisode.name}
                    popularityRating={currentEpisode.popularityRating}
                    season={currentEpisode.season}
                    img={currentEpisode.img}
                />
                <div className="img-overlay-container">
                    <img src={currentEpisode.img} className='episode-img' />
                    <img src={tvImg} className='tv-img' />
                </div>
            </div>
        </div>
    )
}

export default EpisodeDetail