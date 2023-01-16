import React from "react";
import './EpisodeDetail.css'
import EpisodeSheet from "../EpisodeSheet/EpisodeSheet";
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const tvImg = require('../../images/tv.png')

const EpisodeDetail = ({ currentEpisode }) => {
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

EpisodeDetail.propTypes = {
    currentEpisode: PropTypes.object.isRequired
}