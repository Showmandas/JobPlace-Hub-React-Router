import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='container'>
            <div className="row justify-center align-items-center">
                <div className="col-lg-6 col-12">
                    <h1 className='fw-1 w-75' id='heading'>One Step Closer To Your <span>Dream Job</span></h1>
                    <p className='text-secondary fs-6'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn text-white fw-semibold common' >Get Started</button>
                </div>
                <div className='col-lg-6 col-12'>
                    <img src="../../../public/images/man.png" className='img-fluid' alt="man picture" />
                </div>
            </div>
            
        </div>
    );
};

export default Banner;