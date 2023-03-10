import React from 'react'
import PropTypes from 'prop-types'
import './LennyReviews.css'

const lennyImg = require('../../images/lenny.png')

const LennyReviews = ({ lennyList }) => {
    const lennyEpisodes = lennyList.map(episode => {
        return (
            <img src={episode.img} key={episode.key} className='mini-thumbnail' />
        )
    })
    const lennyReviews = (
        <div className='lenny review' id='lenny-review-container'>
            <img src={lennyImg} className='home-lenny-img' />
            <div className='mini-lenny-container'>
                {lennyEpisodes}
            </div>
        </div>
    )
    return lennyReviews
}

export default LennyReviews

LennyReviews.propTypes = {
    lennyList: PropTypes.array.isRequired
}