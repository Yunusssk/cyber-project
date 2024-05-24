// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Body.css'
// import Slider from './Slider.jsx';
import ProductPart from "./ProductPart.jsx";
import BigBanner from "./BigBannerPart.jsx";
import DiscountProductPart from "./DiscountProductPart.jsx";
import CampaignPart from "./CampaignPart.jsx";
import SimpleSlider from "./Slider.jsx";

const Body = () => {
    return (
        <>
            <div className="body">
                <div className="mainbanner">
                    <div className="topbanner">
                        <div className="left">
                            <p className="paragraphFirst">Pro.Beyond.</p>
                            <p className="title">IPhone 14 &nbsp; <p className="pro">Pro</p></p>
                            <p className="paragraphThirth">Created to change everything for the better. For everyone</p>
                            <button className="upBannerBtn">Shop Now</button>
                        </div>
                    </div>
                    <img src="../src/assets/images/bannner.png" className="banner"/>
                </div>
                <div className="bottomBanner">
                    <div className="bottomBannerLeft">
                        <div className="bottomBannerLeftTop">
                            <img src="../src/assets/images/PlayStation.png"/>
                            <div className="bottomBannerLeftTopWriting">
                                <p className="bottomBannerLeftTopBoldWrite">Playstation 5</p>
                                <p className="bottomBannerLeftTopSoftWrite">Incredibly powerful CPUs, GPUs, and an SSD
                                    with integrated I/O will redefine your PlayStation experience.</p>
                            </div>
                        </div>
                        <div className="bottomBannerLeftDown">
                            <div className="bottomBannerLeftDownLeft">
                                <img src="../src/assets/images/max.png"/>
                                <div className="bottomBannerLeftDownLeftDiv">
                                    <p className="bottomBannerLeftDownLeftApple">Apple</p>
                                    <p className="together bottomBannerLeftDownLeftApple">AirPods &nbsp;<p className="max">Max</p></p>
                                    <p className="bottomBannerLeftDownLeftAudio">Computational Audio.</p>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    <p className="bottomBannerLeftDownLeftAudio">Listen,it's powerful</p>
                                </div>
                            </div>
                            <div className="bottomBannerLeftDownRight">
                                <img src="../src/assets/images/applevisionpro.png"/>
                                <div className="bottomBannerLeftDownRightDiv">
                                    <p className="bottomBannerLeftDownRightApple">Apple</p>
                                    <p className="together bottomBannerLeftDownRightApple">Vision &nbsp; <p className="bottomBannerLeftDownRightPro">Pro</p></p>
                                    <p className="bottomBannerLeftDownRightWay">An immersive way to</p>
                                    <p className="bottomBannerLeftDownRightWay">experience entertainment</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="bottomBannerRight">
                        <div className="bottomBannerRightDiv">
                            <p className=" together bottomBannerRightBoldWrite">Macbook&nbsp;<p className="air">Air</p></p>
                            <p className="bottomBannerRightSoftWrite">The new 15-inch Macbook Air makes room for more of
                                what you love with a spacious Liquid Retina display.</p>
                            <button className="downBannerBtn">Shop Now</button>
                        </div>
                        <img src="../src/assets/images/MacBookPro14.png" className="bookpro"/>
                    </div>
                </div>

                <SimpleSlider />
                <ProductPart/>
                <BigBanner />
                <DiscountProductPart />
                <CampaignPart />
            </div>
        </>
    )
}
export default Body;