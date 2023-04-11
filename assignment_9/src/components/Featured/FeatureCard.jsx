import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({feature,handleApplyBtn}) => {
    // console.log(feature);
    
    const{id,img,title,company,job_type_1,job_type_2,salary,location}=feature;
    return (
        <div className="col-lg-6 col-md-3 col-12">
        <div className="card w-100  p-4 text-justify w-100 h-100 mb-2">
          <img src={img} className="img-fluid w-25 px-2" alt="category img" />
          <div className="card-body d-flex flex-column gap-2">
            <h5 className="card-title text-body">{title}</h5>
            <p className="card-text text-body-tertiary text-capitalize fw-semibold">
              {company}
            </p>
            <div className='d-flex justify-content-start gap-3'>
                <button className='btn fw-semibold job_btn'>{job_type_1}</button>
                <button className='btn fw-semibold job_btn'>{job_type_2}</button>
            </div>
            <div className='d-flex justify-content-start mt-3 gap-3'>
                <p>{location}</p>
                <p>Salary : {salary}</p>
            </div>
          </div>
         <Link to={`../featureDetails/${id}`}> <button className='btn common w-100  text-white fw-semibold' id='detailsBtn'>View Details</button></Link>

        </div>
      </div>
    );
};

export default FeatureCard;