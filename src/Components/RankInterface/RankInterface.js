import React from "react";
import './RankInterface.css'
const krustyButtonImg = require('../../images/krusty.png')
const lisaButtonImg = require('../../images/lisa.png')
const lennyButtonImg = require('../../images/lenny.png')

const RankInterface = () => {
    return (
        <div className='rank-interface-container'>
            <div className="my-review-container">
                <h3 className="my-review-text">My Review:</h3>
            </div>
            <div className="button-ui">

                <div className='button-container'>
                    <button className='rank-button'><img src={krustyButtonImg} className='rank-img' /></button>
                    <h3 className="button-text">"What the hell was that?"</h3>
                </div>
                <div className='button-container'>
                    <button className='rank-button'><img src={lisaButtonImg} className='rank-img' /></button>
                    <h3 className="button-text">"Meh"</h3>
                </div>
                <div className='button-container'>
                    <button className='rank-button'><img src={lennyButtonImg} className='rank-img' /></button>
                    <h3 className="button-text">Lenny Appoved</h3>
                </div>

            </div>
        </div>
    )
}

export default RankInterface