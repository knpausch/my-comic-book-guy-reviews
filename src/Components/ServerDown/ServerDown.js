import React from 'react'
import './ServerDown.css'
import PropTypes from 'prop-types'

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

ServerDown.propTypes = {
    errorMessage: PropTypes.string.isRequired
}