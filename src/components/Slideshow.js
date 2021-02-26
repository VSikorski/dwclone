import React, { Component } from "react";
import './style/Slideshow.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const photos = [
    {
        name: 'Photo 1',
        url: "https://i.ibb.co/rZgGRmc/ezgif-com-gif-maker-1.png"
    },
    {
        name: 'Photo 1',
        url: "https://darwin.md/images/slider/2021/02/Site_Lenovo-Ideapad-Gaming-3_1400x520px_Rom.webp"
    },
    {
        name: 'Photo 1',
        url: "https://darwin.md/images/slider/2021/02/Site_1400x520px_Rom.webp"
    },
    {
        name: 'Photo 1',
        url: "https://darwin.md/images/slider/2021/01/samsung_1400x520-ro.webp"
    }
]

class Slideshow extends Component{
    render(){

        const settings = {
            dots: false,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1,
            className: "slides"
        }

        return(
        <div className="slideshow">
            <Slider {...settings} >
                {photos.map((photo) => {
                    return(
                        <div>
                            <img src={photo.url} alt={photo.name} className="slide_pic"/>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}
}

export default Slideshow;
