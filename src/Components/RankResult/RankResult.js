import React from 'react'
import PropTypes from 'prop-types'
import KrustyReviews from '../KrustyReviews/KrustyReviews'
import LisaReviews from '../LisaReviews/LisaReviews'
import LennyReviews from '../LennyReviews/LennyReviews'
import './RankResult.css'

const RankResult = ({ krustyList, lisaList, lennyList }) => {
    window.scrollTo(0, 0)
    const rankResult = (
        <div className='rank-result-container'>
            <KrustyReviews krustyList={krustyList} />
            <LisaReviews lisaList={lisaList} />
            <LennyReviews lennyList={lennyList} />
        </div>
    )
    return rankResult
}

export default RankResult

RankResult.propTypes = {
    krustyList: PropTypes.array.isRequired,
    lisaList: PropTypes.array.isRequired,
    lennyList: PropTypes.array.isRequired
}