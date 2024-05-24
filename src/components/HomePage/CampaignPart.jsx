// eslint-disable-next-line no-unused-vars
import React from 'react';
import './CampaignPart.css'

const CampaignPart = () => {
    return(
        <>
            <div className="BigSummerSale">
                <div className="BigSummerSaleTop">
                    <img className="MidPhoto" src="../src/assets/images/MidPhoto.png"/>
                    <img className="SmallPhoto" src="../src/assets/images/SmallPhoto.png"/>
                    <img className="BigPhoto" src="../src/assets/images/BigPhoto.png"/>
                </div>
                <div className="BigSummerSaleMid">
                    <p className="BigSummerSaleTitle">Big Summer&nbsp;<p className="sale">Sale</p></p>
                    <p className="BigSummerSaleSoft">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
                    <button className="BigSummerSaleBtn">Shop Now</button>
                </div>
                <div className="BigSummerSaleBottom">
                    <img className="HalfPhone" src="../src/assets/images/HalfPhone.png"/>
                    <img className="HalfWatch" src="../src/assets/images/HalfWatch.png"/>
                </div>
            </div>
        </>
    )
}
export default CampaignPart;