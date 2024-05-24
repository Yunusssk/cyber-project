// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Sliderone.css"

const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    return (
        <div className="SimpleSlider">
            <h2 className="CatalogTitle">Browse By Category</h2>
            <Slider {...settings}>
                <div className="CategoryCard">
                    <img className="catalogPhoto phonePosition" src="../src/assets/images/Phones.png"/>
                    <p className="CatalogWrite">Phones</p>
                </div>
                <div className="CategoryCard">
                    <img className="catalogPhoto" src="../src/assets/images/SmartWatches.png"/>
                    <p className="CatalogWrite SmartWatchesPosition">Smart Watches</p>
                </div>
                <div className="CategoryCard">
                    <img className="catalogPhoto" src="../src/assets/images/Cameras.png"/>
                    <p className="CatalogWrite CamerasPosition">Cameras</p>
                </div>
                <div className="CategoryCard">
                    <img className="catalogPhoto" src="../src/assets/images/Headphones.png"/>
                    <p className="CatalogWrite HeadPhonesPosition">HeadPhones</p>

                </div>
                <div className="CategoryCard">
                    <img className="catalogPhoto" src="../src/assets/images/Computers.png"/>
                    <p className="CatalogWrite ComputersPosition">Computers</p>
                </div>
                <div className="CategoryCard">
                    <img className="catalogPhoto" src="../src/assets/images/Gaming.png"/>
                    <p className="CatalogWrite GamingPosition">Gaming</p>
                </div>
                <div className="CategoryCard">
                    <img className="catalogIpad catalogPhoto" src="../src/assets/images/IpadCatalog.png"/>
                    <p className="CatalogWrite IpadPosition">Ipad</p>
                </div>
                <div className="CategoryCard">
                    <img className="catalogAirpods catalogPhoto airpodsPosition" src="../src/assets/images/airpodsCatalog.png"/>
                    <p className="CatalogWrite AirPodsPosition">Air pods</p>
                </div>
            </Slider>
        </div>
    );
}

export default SimpleSlider;