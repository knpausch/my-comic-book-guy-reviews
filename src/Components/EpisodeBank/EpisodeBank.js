import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import EpisodeThumbnail from '../EpisodeThumbnail/EpisodeThumbnail'
import './EpisodeBank.css'

const EpisodeBank = ({ episodes, setCurrentEpisode }) => {
    const episodeImgs = episodes.map(episode => {
        return (
            <NavLink key={episode.id} to={`/episodeDetails/${episode.id}`} onClick={() => setCurrentEpisode(episode.id)}>
                <EpisodeThumbnail
                    name={episode.name}
                    img={episode.img}
                />
            </NavLink>
        )
    })
    return (
        <div className='bank-container'>
            {episodeImgs}
        </div>
    )
}

export default EpisodeBank

EpisodeBank.propTypes = {
    episodes: PropTypes.array.isRequired,
    setCurrentEpisode: PropTypes.func.isRequired
}