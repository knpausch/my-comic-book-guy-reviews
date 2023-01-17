import React from 'react'
import { NavLink } from 'react-router-dom'
import EpisodeSheet from '../EpisodeSheet/EpisodeSheet'
import PropTypes from 'prop-types'
import './EpisodeDetail.css'

const tvImg = require('../../images/tv.png')

const EpisodeDetail = ({ currentEpisode }) => {
    window.scrollTo(0, 0)
    const episodeDetail = (
        <div className='episode-details-and-button-container'>
            <NavLink to={`/`}>
                <button className='go-back-button'>Home</button>
            </NavLink>
            <div className='episode-details-container'>
                <EpisodeSheet
                    airDate={currentEpisode.airDate}
                    description={currentEpisode.description}
                    episodeNum={currentEpisode.episodeNum}
                    key={currentEpisode.key}
                    name={currentEpisode.name}
                    popularityRating={currentEpisode.popularityRating}
                    season={currentEpisode.season}
                />
                <div className='img-overlay-container'>
                    <img src={currentEpisode.img} className='episode-img' />
                    <img src={tvImg} className='tv-img' />
                </div>
            </div>
        </div>
    )
    return episodeDetail
}

export default EpisodeDetail

EpisodeDetail.propTypes = {
    currentEpisode: PropTypes.object.isRequired
}