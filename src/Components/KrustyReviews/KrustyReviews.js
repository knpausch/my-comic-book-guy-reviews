import React from 'react'
import PropTypes from 'prop-types'
import './KrustyReviews.css'

const krustyImg = require('../../images/krusty.png')

const KrustyReviews = ({ krustyList }) => {
    const krustyEpisodes = krustyList.map(episode => {
        return (
            <img src={episode.img} key={episode.key} className='mini-thumbnail' />
        )
    })
    return (
        <div className='krusty review' id='krusty-review-container'>
            <img src={krustyImg} className='home-krusty-img' />
            <div className='mini-krusty-container'>
                {krustyEpisodes}
            </div>
        </div>
    )
}

export default KrustyReviews

KrustyReviews.propTypes = {
    krustyList: PropTypes.array.isRequired
}