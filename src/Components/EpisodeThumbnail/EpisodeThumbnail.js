import React from "react";
import './EpisodeThumbnail.css'
import PropTypes from 'prop-types'

const EpisodeThumbnail = ({ name, img }) => {
    return (
        <div>
            <img src={img} className='thumbnail-img' alt={`Simpsons episode cover of "${name}"`}/> 
        </div>
    )
}

export default EpisodeThumbnail

EpisodeThumbnail.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}