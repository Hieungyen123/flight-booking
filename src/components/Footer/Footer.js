import React from "react";
import './Footer.scss'
import logo from '../../assest/logo.png'
import {GrFacebookOption} from 'react-icons/gr'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {FaPinterestP} from 'react-icons/fa'
function Footer() {
    return ( 
        <div className="footer">
            <div className="sectionContainer container grid">
                <div className="gridOne">
                    <div className="logoDiv">
                        <img src={logo} alt="err" className="logo"/>
                    </div>
                    <p>You mind should be stronger than your feelings, fly!</p>
                    <div className="socialIcon flex">
                        <GrFacebookOption className="icon"/>
                        <AiOutlineTwitter className="icon"/>
                        <AiFillYoutube className="icon"/>
                        <FaPinterestP className="icon"/>
                    </div>
                </div>

                <div className="footerLinks">
                    <span className="LinkTitle">Information</span>
                    <li> <a href="/#">Home</a></li>
                    <li> <a href="/#">Explore</a></li>
                    <li> <a href="/#">Flight Status</a></li>
                    <li> <a href="/#">Travel</a></li>
                    <li> <a href="/#">Check-In</a></li>
                    <li> <a href="/#">Manage your booking</a></li>
                </div>
                <div className="footerLinks">
                    <span className="LinkTitle">Quick Guide</span>
                    <li> <a href="/#">FAQ</a></li>
                    <li> <a href="/#">How to</a></li>
                    <li> <a href="/#">Features</a></li>
                    <li> <a href="/#">Baggage</a></li>
                    <li> <a href="/#">Route Map</a></li>
                    <li> <a href="/#">Our communities</a></li>
                </div>
                <div className="footerLinks">
                    <span className="LinkTitle">Information</span>
                    <li> <a href="/#">Chauffuer</a></li>
                    <li> <a href="/#">Our partners</a></li>
                    <li> <a href="/#">Destination</a></li>
                    <li> <a href="/#">Careers</a></li>
                    <li> <a href="/#">Transportation</a></li>
                    <li> <a href="/#">Programme Rules</a></li>
                </div>
            </div>

            <div className="end flex">
                <p>Design by IstaTech | Developed by NguyenHieu </p>
            </div>
        </div> 
    );
}

export default Footer