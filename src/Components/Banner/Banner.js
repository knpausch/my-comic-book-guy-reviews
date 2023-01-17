import React from 'react'
import './Banner.css'

const logo = require('../../images/review-banner.jpg')

const Banner = () => {
    const banner = (
        <div className='banner-container'>
            <img src={logo} className='banner-img' />
        </div>
    )
    return banner
}

export default Banner