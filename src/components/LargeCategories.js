import React from 'react';
import './style/LargeCategories.css'
import LargeCategory from './LargeCategory';

function LargeCategories() {
    return (
        <div className="largeCategories-cont">

        <LargeCategory 
            src="https://i.postimg.cc/qRFxQ2dN/copii-min.jpg" 
            largeText = "Copii"
            hashtag1 = "#Pistol"
            hashtag2 = "#Baby"
            hashtag3 = "#Razor"
        />

        <LargeCategory 
            src="https://i.postimg.cc/wTgQ2qCc/sanatatemin.jpg" 
            largeText = "Sănătate"
            hashtag1 = "#Tonometru"
            hashtag2 = "#Garmin"
            hashtag3 = "#Senzori"
            hashtag4 = "#Sănătate"
        />

        <LargeCategory 
            src="https://i.postimg.cc/DzXGFRVw/sport-min.jpg" 
            largeText = "Sport"
            hashtag1 = "#Smart"
            hashtag2 = "#Cantar"
            hashtag3 = "#Xiaomi"
            hashtag4 = "#Remax"
            hashtag5 = "#Huawei"
            hashtag6 = "#Fitness"
        />

        <LargeCategory 
            src="https://i.postimg.cc/nMbYfZrZ/electrocasnice-min.png" 
            largeText = "Electrocasnice"
            hashtag1 = "#Aspirator"
            hashtag2 = "#Frigider"
            hashtag3 = "#Philips"
            hashtag4 = "#Bosch"
        />

        <LargeCategory 
            src="https://i.postimg.cc/sX55PqKN/smart-home-min.jpg" 
            largeText = "Smart Home"
            hashtag1 = "#Smart Speaker"
            hashtag2 = "#Camere de supraveghere"
            hashtag3 = "#Aspiratoare"
            hashtag4 = "#Smart Home"
        />

        <LargeCategory 
            src="https://i.postimg.cc/GmPzrBvf/calatorii-min.jpg" 
            largeText = "Călătorii"
            hashtag1 = "#Monopod"
            hashtag2 = "#Boxa"
            hashtag3 = "#Drona"
            hashtag4 = "#Camera"
            hashtag5 = "#Power Bank"
        />

        <LargeCategory 
            src="https://i.postimg.cc/CK1vNhf6/gaming-min.jpg" 
            largeText = "Gaming"
            hashtag1 = "#Jocuri"
            hashtag2 = "#Scaune"
            hashtag3 = "#Laptopuri"
        />
        
        <LargeCategory 
            src="https://i.postimg.cc/TYFBhWLY/instrumente-muzicale.jpg" 
            largeText = "Instrumente muzicale"
            hashtag1 = "#Toba"
            hashtag2 = "#Electronica"
            hashtag3 = "#HELMET"
        />

        </div>
    )
};

export default LargeCategories;
