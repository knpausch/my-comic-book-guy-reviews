import React from "react";
import './RankResult.css'
import KrustyReviews from "../KrustyReviews/KrustyReviews";
import LisaReviews from "../LisaReviews/LisaReviews";
import LennyReviews from "../LennyReviews/LennyReviews";

const RankResult = () => {
    return(
        <div className='rank-result-container'>
            <KrustyReviews />
            <LisaReviews />
            <LennyReviews />
        </div>
    )
}

export default RankResult