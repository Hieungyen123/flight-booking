import React, { useState,useEffect } from 'react';
import './Search.scss'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {RiAccountCircleLine} from 'react-icons/ri'
import {RxCalendar} from 'react-icons/rx'


import Aos from 'aos'
import 'aos/dist/aos.css'
function Search() {
    
    const [active, setActive]  = useState({
        activeObj: null,
        obj: [{id: 1, name:'Economy' }, {id: 2, name:'Business Class' },{id: 3, name:'First Class' }]
    })

    const handelActive = (index) => {
        setActive({...active, activeObj: active.obj[index]})
    }
    const handelActiveStyle = (index) => {
        if(active.obj[index] === active.activeObj) {
            return ('singleBtn active')
        } else {
            return ('singleBtn')
        }
    }

    useEffect(() => {
        Aos.init({duration: 2000})

    },[])
    
    return ( 
        <div className="search container section">
            <div data-aos ='fade-up' data-aos-duration='2500' className="sectionContainer grid">
                <div className="btns flex">
                    {active.obj.map((element,index) => (
                        <div  key={index} className={handelActiveStyle(index)} onClick={() => {handelActive(index)}}>
                            <span>{element.name}</span>
                        </div>
                    ))}

                </div>

                <div data-aos ='fade-up' data-aos-duration='2000' className="searchInputs flex">
                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <HiOutlineLocationMarker className='icon' />
                        </div>
                        <div className='texts'>
                            <h4>location</h4>
                            <input type="text" placeholder='Where do you want to go ?' />
                        </div>
                    </div>

                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <RiAccountCircleLine className='icon'/>
                        </div>
                        <div className='texts'>
                            <h4>Travelers</h4>
                            <input type="text" placeholder='Add guests' />
                        </div>
                    </div>

                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <RxCalendar className='icon'/>
                        </div>
                        <div className='texts'>
                            <h4>Check In</h4>
                            <input type="text" placeholder='Add date' />
                        </div>
                    </div>
                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <RxCalendar className='icon'/>
                        </div>
                        <div className='texts'>
                            <h4>Check Out</h4>
                            <input type="text" placeholder='Add date' />
                        </div>
                    </div>
                

                    <button className='btn btnBlock flex'>Search Flight</button>
                </div>
            </div>

        </div> 
    );
}

export default Search