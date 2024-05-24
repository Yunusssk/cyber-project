// eslint-disable-next-line no-unused-vars
import React from "react";
import './BigBannerPart.css'

const BigBanner = () => {
    return(
        <>
            <div className="BigBanner">
                <div className="BigBannerOne">
                    <img className="BigBannerOneImgTwo" src="../src/assets/images/watchyan.png"/>
                    <img className="BigBannerOneImgOne" src="../src/assets/images/huaweibuds.png"/>
                    <div className="writing">
                        <p className="BigBannerTitle">Popular Products</p>
                        <p className="soft">iPad combines a magnificent 10.2-inch Retina display, incredible
                            performance, multitasking and
                            ease of use.</p>
                        <button className="btn btnOne">Shop Now</button>
                    </div>
                </div>
                <div className="BigBannerTwo">
                    <img className="photograph" src="../src/assets/images/ipadpro.png"/>
                    <div className="writing">
                        <p className="BigBannerTitle">Ipad Pro</p>
                        <p className="soft">iPad combines a magnificent 10.2-inch Retina display, incredible
                            performance, multitasking and
                            ease of use.</p>
                        <button className="btn btnTwo">Shop Now</button>
                    </div>
                </div>
                <div className="BigBannerThree">
                    <img className="photograph" src="../src/assets/images/samsunggalaxy.png"/>
                    <div className="writing">
                        <p className="BigBannerTitle">Samsung Galaxy</p>
                        <p className="soft">iPad combines a magnificent 10.2-inch Retina display, incredible
                            performance, multitasking and
                            ease of use.</p>
                        <button className="btn btnThree">Shop Now</button>
                    </div>
                </div>
                <div className="BigBannerFour">
                    <img className="photograph photographFour" src="../src/assets/images/Macbookpro.png"/>
                    <div className="writing">
                        <p className="BigBannerTitle titleFour">Macbook Pro</p>
                        <p className="soft">iPad combines a magnificent 10.2-inch Retina display, incredible
                            performance, multitasking and
                            ease of use.</p>
                        <button className="btn btnFour">Shop Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BigBanner;