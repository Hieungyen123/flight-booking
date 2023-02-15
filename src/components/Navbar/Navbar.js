import React, {useState,useEffect} from 'react';

import './Navbar.scss';
import {SiConsul} from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
import {CgMenuGridO} from 'react-icons/cg'


import logo from '../../assest/logo.png'

function Navbar() {
    // logic
    // const [active, setActive] = useState('navBarMenu');
    // const showNavBar = () => {
    //     setActive('navBarMenu showNavBar');
    // }
    // const hideNavBar = () => {
    //     setActive('navBarMenu');
    // }

    const [active, setActive] = useState(true);
    const handelNavbar = () => {
        setActive(!active)
    }


    const [noBg, setBg] = useState('navBarTwo');

    useEffect(() => {
        const addBg = () => {
            if(window.scrollY >= 10) {
                setBg(' navBarTwo navbar_with_bg')
                console.log('change scrolly')
            } else {
                setBg('navBarTwo')
            }
        }
        console.log('re-render')
        window.addEventListener('scroll',addBg);
        return () => {
            window.removeEventListener('scroll',addBg);
        }
    },[])

    return ( 
        <div className="navBar flex">
            <div className="navBarOne flex">
                <div>
                    <SiConsul className='icon' />
                </div>

                <div className='none flex'>
                    <li className='flex'> <BsPhoneVibrate  className='icon'/> Support </li>
                    <li className='flex'> <AiOutlineGlobal  className='icon'/> Languages </li>
                </div>

                <div className='atb flex'>
                    <span>Sign In</span>
                    <span>Sign Out</span>
                </div>
            </div>

            <div className={noBg}>
                <div className='logoDiv'>
                    <img src={logo}  alt='' className='Logo' />
                </div>

                {/* <div className= {active}> */}
                {/* {active && 
                    ( */}
                        <div className={active ? 'navBarMenu' : "navBarMenu showNavBar"}>
                            <ul className='menu flex'>
                                <li onClick={handelNavbar} className='listItem'>Home</li>
                                <li onClick={handelNavbar} className='listItem'>About</li>
                                <li onClick={handelNavbar} className='listItem'>Offers</li>
                                <li onClick={handelNavbar} className='listItem'>Seats</li>
                                <li onClick={handelNavbar} className='listItem'>Destinations</li>
                            </ul>
        
                            <button onClick={handelNavbar} className='btn flex btnOne'>
                                Contact
                            </button> 
                        </div> 
                    {/* )
                } */}
                
                <button className='btn flex btnTwo'>Contact</button>
                <div onClick={handelNavbar} className='toggleIcon'>
                    <CgMenuGridO className='icon'/>
                </div>
            </div>
        </div> 
    );
}

export default Navbar;