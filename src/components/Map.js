import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';

function unembededMap(){
    return(
        <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 47.411633,lng: 28.369884 }}
        />
    );
};

const WrappedMap = (withScriptjs(withGoogleMap(unembededMap)));

function Map() {
    return (
        <div style={{ width:"100%", height: "100%"}}>
            <WrappedMap 
            googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCu4TxA4SsbWt1yOteLBGlbsTlEDXY5m4U"}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%" }}/>}
            />
        </div>
    )
};

export default Map;
