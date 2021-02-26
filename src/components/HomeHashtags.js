import React from 'react';
import Hashtags from './Hashtags';
import './style/HomeHashtags.css';
import Slideshow from './Slideshow';

function HomeHashtags() {
    return (
        <div>
            <div className="Hashtags">
            <Hashtags name="#Credit 0%" status="regular"/>
            <Hashtags name="#Iphone 12" status="regular"/>
            <Hashtags name="#Produse 18+" status="special"/>
            <Hashtags name="#Galaxy S21" status="regular"/>
            <Hashtags name="#AirPods Max" status="regular"/>
            <Hashtags name="#Asus D509" status="regular"/>
            <Hashtags name="#Căști" status="regular"/>
            <Hashtags name="#Apple Watch 2020" status="regular"/>
            <Hashtags name="#Boxe portabile" status="regular"/>
            <Hashtags name="#Macbook pro" status="regular"/>
            <Hashtags name="#IQOS" status="regular"/>
            </div>
            <Slideshow />
        </div>
    )
};

export default HomeHashtags;
