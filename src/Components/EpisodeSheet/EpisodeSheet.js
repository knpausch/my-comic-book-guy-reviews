import React from 'react'
import PropTypes from 'prop-types'
import './EpisodeSheet.css'

const EpisodeSheet = ({ airDate, description, episodeNum, name, popularityRating, season }) => {
    const episodeSheet = (
        <div className='episode-sheet'>
            <h1 className='ep-name'>{name}</h1>
            <div className='season-episode-container'>
                <h2 className='ep-season'>Season: {season}</h2>
                <h2 className='ep-episode'>Episode: {episodeNum}</h2>
            </div>
            <h3 className='description-text'>Description:</h3>
            <h3 className='ep-description'>"{description}"</h3>
            <div className='popularity-air-date-container'>
                <h4 className='ep-popularity'>⭐️Audience Score: {popularityRating}/10</h4>
                <h4 className='ep-air-date'>📺Air Date: {airDate}</h4>
            </div>
        </div>
    )
    return episodeSheet
}

export default EpisodeSheet

EpisodeSheet.propTypes = {
    airDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    episodeNum: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    popularityRating: PropTypes.number.isRequired,
    season: PropTypes.number.isRequired
}