import React from 'react'
import './Traveler.scss'
import user1 from '../../assest/person1.jpg'
import user2 from '../../assest/person2.jpg'
import user3 from '../../assest/person3.jpg'
import user4 from '../../assest/person4.jpg'

import london from '../../assest/london.jpg'
import paris from '../../assest/paris.jpg'
import newyork from '../../assest/newyork.jpg'
import dubai from '../../assest/dubai.jpg'


function Traveler() {

    const traverlers = [
        {
            id: 1,
            destinationImg: paris,
            traverlerImg: user1,
            traverlerName: 'John',
            socialLink: '@John47'
        },
        {
            id: 2,
            destinationImg: london,
            traverlerImg: user2,
            traverlerName: 'Maggie',
            socialLink: '@Maggie23'
        },
        {
            id: 3,
            destinationImg: dubai,
            traverlerImg: user3,
            traverlerName: 'Sira',
            socialLink: '@Sira90'
        },
        {
            id: 3,
            destinationImg: newyork,
            traverlerImg: user4,
            traverlerName: 'Mike',
            socialLink: '@Mike90'
        },
    ]


    return ( 
        <div className='traverlers container section'>
            <div className='sectionContainer'>
                <h2>
                    Top travelers of this month!
                </h2>

                <div className='traverlersContainer grid'>
                    {/*  */}
                    { traverlers.map((traverler, index) => {
                        return (
                            <div key={index} className='singleTraverler'>
                                <img src={traverler.destinationImg} className='destinationImg ' alt='err' />
                                <div className='traverlerDetails'>
                                    <div className='traverlerPicture'>
                                        <img src={traverler.traverlerImg}  className='traverlerImg' alt='err' />
                                    </div>
                                    <div className='traverlerName'>
                                        <span>{traverler.traverlerName}</span>
                                        <p> {traverler.socialLink}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                    {/*  */}
                </div>
            </div>
        </div> 
    );
}

export default Traveler