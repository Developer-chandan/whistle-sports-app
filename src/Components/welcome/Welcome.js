import React from 'react';
import "./welcome.css"

const Welcome = () => {
    return (
       <section id='welcome'>
           <div className='container'>
               <div className="row">
                   <div className="col-md-6">
                       <div className="welcome-content text-light text-start">
                      
                          <h3 className='text-uppercase'>Be a part of it</h3>
                           <h1 className='display-1 fw-bolder'>WE CREATE HISTORY</h1>
                           <p>With lots of Features and Stylish Shortcodes makes WHiSTLE a Complete Sports Theme</p>
                         
                       </div>
                   </div>
                   <div className="col-md-6"></div>
               </div>
               
            </div> 
       </section>
            
    
    );
};

export default Welcome;