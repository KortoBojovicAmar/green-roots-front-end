import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './style.scss';

const Slider = ({datas}) => {

    return (
        <Carousel>
            {datas.map((slide) => (
            <div key={slide.id} >
                <img src={slide.CampaignPictures[0].image_url} />
                <div className="overlay">
                    <h2 className="overlay__title">{slide.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}</h2>
                    <p className="overlay__description">{slide.description}</p>
                </div>
            </div>
            ))} 
        </Carousel>
    );
};

export default Slider;