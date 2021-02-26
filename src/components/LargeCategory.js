import React from 'react';

function LargeCategory({src, largeText, hashtag1, hashtag2, hashtag3, hashtag4, hashtag5, hashtag6}) {
    return (
        <div className="largeCategories">
            <img src={src} className="lccover"/>
            <div className="largeCategories-banner"><div className="banner-cont"><p>{largeText}</p></div></div>
            <div className="largeCategories-hashtags">
                {hashtag1 ? <div className="largeCategories-hashtag">{hashtag1}</div>
                : null }
                {hashtag2 ? <div className="largeCategories-hashtag">{hashtag2}</div>
                : null }
                {hashtag3 ? <div className="largeCategories-hashtag">{hashtag3}</div>
                : null }
                {hashtag4 ? <div className="largeCategories-hashtag">{hashtag4}</div>
                : null }
                {hashtag5 ? <div className="largeCategories-hashtag">{hashtag5}</div>
                : null }
                {hashtag6 ? <div className="largeCategories-hashtag">{hashtag6}</div>
                : null }
            </div>
            <div className="largeCategories-button"><p>Detalii</p></div>
        </div>
    )
};
export default LargeCategory;
