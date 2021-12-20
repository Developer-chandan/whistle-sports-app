import React from 'react';
import './sports.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking, faGolfBall, faSwimmingPool, faTableTennis, faRunning, faTextHeight} from '@fortawesome/free-solid-svg-icons';
const Sports = () => {
    return (


        <section id='sports'>
            <div className="row mx-0">
                <div className="col-md-2 m-0 p-0">
                    <div className="sports-img-1">
                        <div>
                            <FontAwesomeIcon className='icons' icon={faBiking} />
                            <h2>cycling</h2>
                        </div>

                    </div>
                </div>
                <div className="col-md-2 m-0 p-0">
                    <div className="sports-img-2">
                        <div>
                            <FontAwesomeIcon className='icons' icon={faGolfBall} />
                            <h2>golf</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 m-0 p-0">
                    <div className="sports-img-3">
                        <div>
                            <FontAwesomeIcon className='icons' icon={faSwimmingPool} />
                            <h2>swimming</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 m-0 p-0">
                    <div className="sports-img-4">
                        <div>
                            <FontAwesomeIcon className='icons' icon={faTableTennis} />
                            <h2>tennis</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 m-0 p-0">
                    <div className="sports-img-5">
                        <div>
                            <FontAwesomeIcon className='icons' icon={faRunning} />
                            <h2>truck tranning</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 m-0 p-0">
                    <div className="sports-img-6">
                        <div>
                            <FontAwesomeIcon className='icons' icon={faTextHeight} />
                            <h2>weight tranning</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sports;