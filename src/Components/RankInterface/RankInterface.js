import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import './RankInterface.css'

const krustyButtonImg = require('../../images/krusty.png')
const lisaButtonImg = require('../../images/lisa.png')
const lennyButtonImg = require('../../images/lenny.png')

const RankInterface = ({ updateRating }) => {
    const rankInterface = (
        <div className='rank-interface-container'>
            <div className='my-review-container'>
                <h3 className='my-review-text'>My Review:</h3>
            </div>
            <div className='button-ui'>
                <div className='button-container'>
                    <NavLink to={`/`}>
                        <button className='rank-button' id='krusty-button'><img src={krustyButtonImg} name='krusty' className='rank-img' onClick={event => { updateRating(event.target.name) }} /></button>
                    </NavLink>
                    <h3 className='button-text'>"What the hell was that?"</h3>
                </div>
                <div className='button-container'>
                    <NavLink to={`/`}>
                        <button className='rank-button' id='lisa-button'><img src={lisaButtonImg} name='lisa' className='rank-img' onClick={event => { updateRating(event.target.name) }} /></button>
                    </NavLink>
                    <h3 className='button-text'>"Meh"</h3>
                </div>
                <div className='button-container'>
                    <NavLink to={`/`}>
                        <button className='rank-button' id='lenny-button'><img src={lennyButtonImg} name='lenny' className='rank-img' onClick={event => { updateRating(event.target.name) }} /></button>
                    </NavLink>
                    <h3 className='button-text'>Lenny Approved</h3>
                </div>
            </div>
        </div>
    )
    return rankInterface
}

export default RankInterface

RankInterface.propTypes = {
    updateRating: PropTypes.func.isRequired
}