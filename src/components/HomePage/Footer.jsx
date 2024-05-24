// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.css'

const Footer = () => {
    return(
        <>
            <div className="footer">
                <div className="information">
                    <div className="informationOne">
                        <img className="WhiteLogo" src="../src/assets/images/LogoWhite.png"/>
                        <p className="footerInformation">We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
                    </div>
                    <div className="informationTwo">
                        <ul>
                            <li className="services">Services</li>
                            <li>Bonus Program</li>
                            <li>Gift Cards</li>
                            <li>Credit and Payments</li>
                            <li>Service contracts</li>
                            <li>Non-cash account</li>
                            <li>Payment</li>
                        </ul>
                    </div>
                    <div className="informationThree">
                        <ul>
                            <li className="services">Asisstance to the buyer</li>
                            <li>Find an order</li>
                            <li>Terms of delivery</li>
                            <li>Exchange and return of goods</li>
                            <li>Guarantee</li>
                            <li>Frequently asked question</li>
                            <li>Terms of use of the site</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;