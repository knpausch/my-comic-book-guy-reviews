import React from "react";
import './EpisodeThumbnail.css'

const EpisodeThumbnail = ({ img }) => {
    return (
        <div>
            <img src={img}/> 
        </div>
    )
}

export default EpisodeThumbnail