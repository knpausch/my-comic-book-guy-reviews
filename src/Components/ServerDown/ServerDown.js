import React from 'react'
import './ServerDown.css'

const sadHomerImg = require('../../images/sad-homer.png')

const ServerDown = ({ errorMessage }) => {
    return (
        <div className='message-container'>
            <h2>{errorMessage}</h2>
            <img src={sadHomerImg} />
        </div>
    )
}

export default ServerDown