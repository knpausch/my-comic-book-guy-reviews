import React from "react";
import './EpisodeThumbnail.css'

const EpisodeThumbnail = ({ name, img }) => {
    return (
        <div>
            <img src={img} className='thumbnail-img'/> 
        </div>
    )
}

export default EpisodeThumbnail