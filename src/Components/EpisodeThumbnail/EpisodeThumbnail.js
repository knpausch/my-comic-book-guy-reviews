import React from 'react'
import PropTypes from 'prop-types'
import './EpisodeThumbnail.css'

const EpisodeThumbnail = ({ name, img }) => {
    return (
        <div>
            <img src={img} className='thumbnail-img' alt={`Simpsons episode cover of "${name}"`} />
        </div>
    )
}

export default EpisodeThumbnail

EpisodeThumbnail.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}