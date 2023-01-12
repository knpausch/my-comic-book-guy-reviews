import React from "react";
import './EpisodeBank.css'
import EpisodeThumbnail from "../EpisodeThumbnail/EpisodeThumbnail";

const EpisodeBank = ({ episodes }) => {
    const episodeImgs = episodes.map(episode => {
        return <EpisodeThumbnail 
        name = {episode.name}
        img = {episode.img}
        />
    })
    return (
        <div className='bank-container'>
            {episodeImgs}
        </div>
    )
}

export default EpisodeBank