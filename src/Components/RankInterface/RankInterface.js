import React from "react";
import './RankInterface.css'
import { NavLink } from 'react-router-dom'

const krustyButtonImg = require('../../images/krusty.png')
const lisaButtonImg = require('../../images/lisa.png')
const lennyButtonImg = require('../../images/lenny.png')

const RankInterface = ({ updateRating }) => {

    const handleChange = event => {
        console.log("You selected rating: ", event.target.name)
        updateRating(event.target.name)
    }

    return (
        <div className='rank-interface-container'>
            <div className="my-review-container">
                <h3 className="my-review-text">My Review:</h3>
            </div>
            <div className="button-ui">

                <div className='button-container'>
                    <NavLink to={`/`}>
                        <button className='rank-button' id='krusty-button'><img src={krustyButtonImg} name='krusty' className='rank-img' onClick={event => { handleChange(event) }} /></button>
                    </NavLink>
                    <h3 className="button-text">"What the hell was that?"</h3>
                </div>
                <div className='button-container'>
                    <NavLink to={`/`}>
                        <button className='rank-button' id='lisa-button'><img src={lisaButtonImg} name='lisa' className='rank-img' onClick={event => { handleChange(event) }} /></button>
                    </NavLink>
                    <h3 className="button-text">"Meh"</h3>
                </div>
                <div className='button-container'>
                    <NavLink to={`/`}>
                        <button className='rank-button' id='lenny-button'><img src={lennyButtonImg} name='lenny' className='rank-img' onClick={event => { handleChange(event) }} /></button>
                    </NavLink>
                    <h3 className="button-text">Lenny Approved</h3>
                </div>

            </div>
        </div>
    )
}

export default RankInterface