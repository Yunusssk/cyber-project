// eslint-disable-next-line no-unused-vars
import React from 'react';
import './DetailCard.css'

const DetailCard = (props) => {

    // eslint-disable-next-line react/prop-types
    const price = props.price;
    // eslint-disable-next-line react/prop-types
    const title = props.title;
    // eslint-disable-next-line react/prop-types
    const image = props.image;



    return(
        <>
            <div className="mainInfo">
                <div className="productDetailImagesPart">
                    <div className="productDetailImagePartLeft">
                        <img src={image}/>
                        <img src="../src/assets/Detailimage/iphone14pro1.webp"/>
                        <img src="../src/assets/Detailimage/iphone14pro2.jpeg"/>
                        <img src="../src/assets/Detailimage/iphone14pro3.webp"/>
                    </div>
                    <div className="productDetailImagePartRight">
                        <img src={image}/>
                    </div>
                </div>
                <div className="productDetailInfoPart">
                    <div>
                        <p>{title}</p>
                        <p>{price}</p>
                    </div>
                    <div className="selectColor">
                        <label>Select color:
                        </label>
                        <div className="selectColor1"></div>
                        <div className="selectColor2"></div>
                        <div className="selectColor3"></div>
                        <div className="selectColor4"></div>
                        <div className="selectColor5"></div>
                    </div>
                    <div>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <p>Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without
                            rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the
                            new systemwith two cameras <button>more...</button></p>
                    </div>
                    <div>
                        <button>Add to Wishlist</button>
                        <button>Add to Cart</button>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DetailCard;