import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

function LoadingBox() {
    return (
        <div>
            <CircularProgress />
            Loading...
        </div>
    )
};

export default LoadingBox;
