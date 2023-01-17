import React from 'react'
import './Banner.css'

const logo = require('../../images/review-banner.jpg')

const Banner = () => {
    return (
        <div className='banner-container'>
            <img src={logo} className='banner-img' />
        </div>
    )
}

export default Banner