import './Lounge.scss'

import img from '../../assest/pilot5.jpg'
import img2 from '../../assest/pilot4.jpg'

function Lounge() {
    return ( 
        <div className="lounge container section" >
            <div className="sectionContainer grid">
                <div className="imgDiv">
                    <img src={img} className="img1" alt="err" />
                    <img src={img2} className="img2" alt="err" />
                </div>

                <div className='textDiv'>
                    <h2>Unacompanied Minor Lounge</h2>

                    <div className='grids grid'>
                        {/*  */}

                        <div className='singleGrid'>
                            <span className='gridTitle'> Help through the airport. </span>
                            <p>
                               You can also call airlines from your phone and book a flight ticket!
                                to one of your favorite destination.
                            </p>
                        </div>

                        <div className='singleGrid'>
                            <span className='gridTitle'> Priority Boarding. </span>
                            <p>
                               You can also call airlines from your phone and book a flight ticket!
                                to one of your favorite destination.
                            </p>
                        </div>

                        <div className='singleGrid'>
                            <span className='gridTitle'> Care on the flight. </span>
                            <p>
                               You can also call airlines from your phone and book a flight ticket!
                                to one of your favorite destination.
                            </p>
                        </div>
                        <div className='singleGrid'>
                            <span className='gridTitle'> Chauffeur-drive secvice. </span>
                            <p>
                               You can also call airlines from your phone and book a flight ticket!
                                to one of your favorite destination.
                            </p>
                        </div>

                        {/*  */}
                    </div>
                </div>


            </div>
        </div> 
    );
}

export default Lounge