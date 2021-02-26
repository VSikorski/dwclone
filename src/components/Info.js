import React from 'react';
import './style/Info.css';
import NightsStayIcon from '@material-ui/icons/NightsStay';

function Info() {
    return (
        <div className="info">
            <p className="magazine">Magazine</p>
            <div className="tel">
                <img src="http://www.clker.com/cliparts/r/M/L/o/R/i/green-dot.svg.hi.png" alt="green_dot"/>
                <p className="telnum">060 78 22 23</p>
            </div>
            <div className="nightStayIcon">
                <NightsStayIcon />
            </div>
            <div className="roru">
                <div className="ro">
                    ro
                </div>
                <div className="ru">
                    ru
                </div>
            </div>
        </div>
    );
};

export default Info;
