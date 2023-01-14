import React from "react";
import './KrustyReviews.css'
const krustyImg = require('../../images/krusty.png')

const KrustyReviews = ({ krustyList }) => {
    const krustyEpisodes = krustyList.map(episode => {
        return(
            <img src={episode.img} className='krusty-thumbnail' />
        )
    })
    return (
        <div className='krusty review'>
            <img src={krustyImg} className='home-krusty-img' />
            {krustyEpisodes}
        </div>
    )
}

export default KrustyReviews