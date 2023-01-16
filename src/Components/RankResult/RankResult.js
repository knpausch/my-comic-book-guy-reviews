import React from "react";
import './RankResult.css'
import KrustyReviews from "../KrustyReviews/KrustyReviews";
import LisaReviews from "../LisaReviews/LisaReviews";
import LennyReviews from "../LennyReviews/LennyReviews";
import PropTypes from 'prop-types'

const RankResult = ({krustyList, lisaList, lennyList}) => {
    return(
        <div className='rank-result-container'>
            <KrustyReviews krustyList={krustyList}/>
            <LisaReviews lisaList={lisaList}/>
            <LennyReviews lennyList={lennyList}/>
        </div>
    )
}

export default RankResult

RankResult.propTypes = {
    krustyList: PropTypes.array.isRequired,
    lisaList: PropTypes.array.isRequired,
    lennyList: PropTypes.array.isRequired
}