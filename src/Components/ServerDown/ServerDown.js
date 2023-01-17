import React from 'react'
import PropTypes from 'prop-types'

const sadHomerImg = require('../../images/sad-homer.png')

const ServerDown = ({ errorMessage }) => {
    const serverDown = (
        <div className='message-container'>
            <h2 className='server-down-text'>{errorMessage}</h2>
            <img src={sadHomerImg} className='sad-homer-img' />
        </div>
    )
    return serverDown
}

export default ServerDown

ServerDown.propTypes = {
    errorMessage: PropTypes.string.isRequired
}