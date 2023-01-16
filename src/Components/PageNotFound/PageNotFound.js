import React from 'react'
import './PageNotFound.css'
import { NavLink } from 'react-router-dom'

const sadHomerImg = require('../../images/sad-homer.png')

const PageNotFound = () => {
    return (
        <div className='message-container'>
            <h2 className='bad-url-text'>D'oh! URL not found</h2>
            <NavLink to='/'>
                <button className="redirect-button">Go Back Home</button>
            </NavLink>
            <img src={sadHomerImg} className='sad-homer-img'/>
        </div>
    )
}

export default PageNotFound