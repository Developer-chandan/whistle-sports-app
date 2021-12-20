import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './banner.css';
import { faFutbol, faUsers, faCalendar } from '@fortawesome/free-solid-svg-icons'

const Banner = () => {
    return (
        <section id='banner' className='my-5'>
            <div className='banner-style d-flex justfy-content-between'>
                  <div className="part-1"></div>
                  <div className="part-2">
                     
                          <div className='part2-wrapper mt-5'>
                              <div className='d-flex flex-row justify-content-around'>
                                  <div>
                                     <div className="box-1">
                                     <FontAwesomeIcon className='banner-icons' icon={faFutbol}></FontAwesomeIcon>
                                     </div>
                                     <div><strong className='text-light text-uppercase'>Choose any game</strong></div>
                                  </div>
                                  <div >
                                     <div className="box-2">
                                     <FontAwesomeIcon className='banner-icons' icon={faUsers}></FontAwesomeIcon>
                                     </div>
                                     <div><strong className='text-light text-uppercase'>TRAIN BY PROFESSIONAL</strong></div>
                                  </div>
                                  <div >
                                     <div className="box-3">
                                     <FontAwesomeIcon className='banner-icons' icon={faCalendar}></FontAwesomeIcon>
                                     </div>
                                     <div><strong className='text-light text-uppercase'>Become a pro</strong></div>
                                  </div>

                                  
                              </div>
                              <div className='part2-content my-5 text-light'>
                                  <h2 className='my-3 text-light'>THE BEST SPORTS THEME WITH ALL IN-BUILT FEATURES TO MAKE AN AMAZING WEBSITE</h2>
                                  <p className='my-2 text-light text-capitalize'>WHISTLE is a Trendy Theme with the latest features and stays updated to the latest technological equipments.</p>
                                  <div className='buttonGroup my-5'>
                                  <button type="button">Join Us</button>
                                  <button type="button">leran More</button>
                                  </div>
                              </div>
                          
                            </div>
                  </div>
           
          </div>
        </section>
    );
};

export default Banner;