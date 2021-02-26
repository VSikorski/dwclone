import React from 'react';
import './style/BlogPreview.css';

function BlogPreview({src, date, heading, text, hashtag1, hashtag2, hashtag3, hashtag4, hashtag5, hashtag6}) {
    return (
        <div className="BlogPreview">
                <div className="blog-cover"><img src={src} alt="cover image"/></div>
                <div className="date-cont"><div className="blog-date"><p>{date}</p></div></div>
                <div className="hashtags-cont">
                    {hashtag1 ? <div className="blog-hashtag">{hashtag1}</div>
                    : null }
                    {hashtag2 ? <div className="blog-hashtag">{hashtag2}</div>
                    : null }
                    {hashtag3 ? <div className="blog-hashtag">{hashtag3}</div>
                    : null }
                    {hashtag4 ? <div className="blog-hashtag">{hashtag4}</div>
                    : null }
                    {hashtag5 ? <div className="blog-hashtag">{hashtag5}</div>
                    : null }
                    {hashtag6 ? <div className="blog-hashtag">{hashtag6}</div>
                    : null }
                </div>
                <div className="blog-banner">
                    <div className="blog-heading">{heading}</div>
                    <div className="blog-text"><p>{text}</p></div>
                </div>
            </div>

    )
};
export default BlogPreview;
