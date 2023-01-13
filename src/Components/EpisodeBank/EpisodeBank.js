import React from "react";
import './EpisodeBank.css'
import EpisodeThumbnail from "../EpisodeThumbnail/EpisodeThumbnail";
import { NavLink } from 'react-router-dom'

const EpisodeBank = ({ episodes }) => {
    const episodeImgs = episodes.map(episode => {
        return (
            <NavLink key={episode.id} to={`/episodeDetails/${episode.id}`}>
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