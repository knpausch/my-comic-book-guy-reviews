import React from "react";
import './EpisodeSheet.css'

const EpisodeSheet = ({airDate, description, episodeNum, id, name, popularityRating, season, img}) => {
    return (
        <div className='episode-sheet'>
            <h1>{name}</h1>
            <h2>Season: {season}</h2>
            <h2>Episode: {episodeNum}</h2>
            <h3>Air Date: {airDate}</h3>
            <h3>Audience Score: {popularityRating}/10</h3>
            <h4>Description: {description}</h4>
        </div>
    )
}

export default EpisodeSheet