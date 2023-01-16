import React from 'react'
import './PageNotFound.css'
import { NavLink } from 'react-router-dom'

const sadHomerImg = require('../../images/sad-homer.png')

const PageNotFound = () => {
    return (
        <div className='message-container'>
            <h2>D'oh! URL not found. Please try again.</h2>
            <NavLink to='/'>
                <button className="redirect-button">Go Back Home</button>
            </NavLink>
            <img src={sadHomerImg}/>
        </div>
    )
}

export default PageNotFound