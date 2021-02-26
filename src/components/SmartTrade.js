import React from 'react';
import './style/SmartTrade.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function SmartTrade() {
    return (
        <div className="smart-cont">

        <div className="smartTrade smartTrade1">
            <div className="smart-text">
                <div className="smart-text-large">
                    <p>Smart Protection</p>
                </div>
                <div className="smart-text-small">
                    <p>avem grijă de device-ul tău în situații imprevizibile: ecran spart, contact cu apa etc.</p>
                </div>
            </div>
            <div className="smart-playicon">
                <div className="PlayArrowIcon"><PlayArrowIcon /></div>
            </div>
        </div>

        <div className="smartTrade smartTrade2">
            <div className="smart-text">
                <div className="smart-text-large">
                    <p>Trade In</p>
                </div>
                <div className="smart-text-small">
                    <p>un serviciu unic pentru înlocuirea dispozitivelor vechi cu altele mai noi.</p>
                </div>
            </div>
            <div className="smart-playicon">
                <div className="PlayArrowIcon"><PlayArrowIcon /></div>
            </div>
        </div>

        </div>
    )
};

export default SmartTrade;
