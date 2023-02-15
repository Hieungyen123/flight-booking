import React, {useEffect} from "react";
import "./Support.scss"
import windown from '../../assest/window.jpg'
import windown2 from '../../assest/window2.jpg'
import windown3 from '../../assest/window3.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'
function Support() {

    useEffect(() => {
        Aos.init({duration: 2000})
    },[])
    

    return ( 
        <div className="support container section">
            <div className="sectionContainer">
                <div className="tittlesDiv">
                    <small>Travel support</small>
                    <h2>Plane your travel with confidence</h2>
                    <p>Find help with booking and travel plans, see what to expect along the journey! </p>
                </div>

                <div className="infoDiv grid">
                    <div className="textDiv grid">
                        {/*  */}
                        <div data-aos ='fade-down' data-aos-duration='3500' className="singleInfo">
                            <span className="number">01</span>
                            <h4>Travel requirement to Dubai</h4>
                            <p>
                                find help with booking and travel plans,
                                see what to expect along the journey to your favourite destination! 
                            </p>
                        </div>

                        <div data-aos ='fade-down' data-aos-duration='3500' className="singleInfo ">
                            <span className="number colorOne ">02</span>
                            <h4>chauffeur services at your arrival</h4>
                            <p>
                                find help with booking and travel plans,
                                see what to expect along the journey to your favourite destination! 
                            </p>
                        </div>

                        <div data-aos ='fade-down' data-aos-duration='3500' className="singleInfo">
                            <span className="number colorTwo">03</span>
                            <h4>multi-risk travel insurance</h4>
                            <p>
                                find help with booking and travel plans,
                                see what to expect along the journey to your favourite destination! 
                            </p>
                        </div>
                        {/*  */}
                    </div>

                    <div data-aos ='fade-left' data-aos-duration='3500' className="imgDiv">
                        <img src={windown} className="img1" alt="err"/>
                        <img src={windown3} className="img2" alt="err"/>
                        <img src={windown2} className="img3" alt="err"/>
                        
                    </div>
                </div>
            </div>
            
        </div> 
    );
}

export default Support