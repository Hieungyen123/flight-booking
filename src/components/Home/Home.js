import './Home.scss'

import React, { useEffect } from 'react';

import Aos from 'aos'
import 'aos/dist/aos.css'

import plane from '../../assest/plane3.png'
import video from '../../assest/Landscape.mp4'

function Home() {

    useEffect(() => {
        Aos.init({duration: 2000})

    },[])
    return ( 
        <div className="home flex container">
            <div className="mainText">
                <h1 data-aos ='fade-up' data-aos-duration='2500'> Create Ever-lasting Memories With Us</h1>
            </div>
            <div className="homeImages flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop className="video"></video>
                </div>

                <img data-aos ='fade-down' data-aos-duration='2500' src={plane} className="plane" alt='err'></img>
            </div>
        </div> 
    );
}

export default Home