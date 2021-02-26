import React from 'react';
import './style/AddonInfo.css';

function AddonInfo() {
    return (
        <div className="AddonInfo">

            <div className="addon-card addon-card1">
                <div className="addon-icon-cont"><div className="addon-icon addon-icon1"></div></div>
                <div className="addon-text-large">Primești până la 2 ani de garanție</div>
                <div className="addon-text-small">Lucrul meșterului e gratuit, piesele sunt gratuite.</div>
            </div>
            <div className="sideBar-cont"><div className="sideBar"></div></div>

            <div className="addon-card addon-card2">
                <div className="addon-icon-cont"><div className="addon-icon addon-icon2"></div></div>
                <div className="addon-text-large">Livrare gratuită în Chișinău în 3 ore</div>
                <div className="addon-text-small">Timpul tău e de aur. Îți livrăm comanda oriunde în raza Chișinăului, de la 3 ore.</div>
            </div>
            <div className="sideBar-cont"><div className="sideBar"></div></div>

            <div className="addon-card addon-card3">
                <div className="addon-icon-cont"><div className="addon-icon addon-icon3"></div></div>
                <div className="addon-text-large">Protejarea produsului de situații neprevăzute</div>
                <div className="addon-text-small">Conform Digital Trends, 50 % din toți cei care dețin un smartphone s-au pomenit cu un ecran spart. 
                Și tu te poți trezi cu telefonul în cădere liberă sau înecat.</div>
            </div>
            <div className="sideBar-cont"><div className="sideBar"></div></div>

            <div className="addon-card addon-card4">
                <div className="addon-icon-cont"><div className="addon-icon addon-icon4"></div></div>
                <div className="addon-text-large">92% din cereri de credit aprobate</div>
                <div className="addon-text-small">Aprobare în doar 15 minute. Colaborăm cu Easy Credit, Iute Credit, Microinvest și alții. 
                Obține credite de la 6 până la 60 de luni.</div>
            </div>

        </div>
    )
};

export default AddonInfo;
