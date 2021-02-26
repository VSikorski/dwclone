import React from 'react';
import './style/Hashtags.css';

function Hashtags({name, status}) {
return(
    <div className="hashtag">
        <p className={status}>
            {name}
        </p>
    </div>
)
}

export default Hashtags;
 