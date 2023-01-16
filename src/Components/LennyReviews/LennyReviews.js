import React from "react";
import './LennyReviews.css'
import PropTypes, { array } from 'prop-types'

const lennyImg = require('../../images/lenny.png')

const LennyReviews = ({ lennyList }) => {
    const lennyEpisodes = lennyList.map(episode => {
        return (
            <img src={episode.img} key={episode.key} className='mini-thumbnail' />
        )
    })
    return (
        <div className='lenny review' id='lenny-review-container'>
            <img src={lennyImg} className='home-lenny-img' />
            <div className="mini-lenny-container">
                {lennyEpisodes}
            </div>
        </div>
    )
}

export default LennyReviews

LennyReviews.propTypes = {
    lennyList: PropTypes.array.isRequired
}