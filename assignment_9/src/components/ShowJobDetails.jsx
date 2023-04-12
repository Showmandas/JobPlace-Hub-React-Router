import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ShowJobDetails = ({jobdata}) => {
  // const[jobData,setJobData]=useState({jobdata})
  // console.log(jobData.jobdata);
  // const [filterData,setFilterData]=useState([])
  // const showJob=()=>{
  //   const filtered=jobData.jobdata.filter(job=>job.job_type_1=='Remote')
  //   setJobData(filtered)
  // }
    const{id,title,img,company,job_type_1,job_type_2,location,salary}=jobdata
    
    return (
        <div className='mt-5'>
              {/* <button onClick={showJob}>Remote</button> */}
          <div className='d-flex justify-content-lg-end align-items-lg-end'>
              <div>
                {/* {
                     filterData.map(item=><h2>hello remote</h2>)
                } */}
              </div>
              </div>
            <div className="card mb-3 h-100">
  <div className="row gy-2">
    <div className="col-md-4  d-flex justify-content-center align-items-center">
      <img src={img} className="img-fluid rounded m-auto w-50 py-5 " alt="..."/>
    </div>
    <div className="col-md-4 d-flex justify-content-center align-items-center">
      <div className="card-body">
      <h5 className="card-title text-body">{title}</h5>
            <p className="card-text text-body-tertiary text-capitalize fw-semibold">
              {company}
            </p>
            <div className='d-flex justify-content-start gap-3'>
                <button className='btn fw-semibold job_btn'>{job_type_1}</button>
                <button className='btn fw-semibold job_btn'>{job_type_2}</button>
            </div>
            <div className='d-flex justify-content-start mt-3 gap-2'>
                <p style={{color:'#757575'}}><img src='../../public/images/location.png'/> {location}</p>
                <p style={{color:'#757575'}}><img src='../../public/images/salary.png'/> Salary : {salary}</p>
            </div>
          </div>

      </div>
      <div className='col-lg-4 d-flex justify-content-center align-items-center'>

         <Link to={`/featureDetails/${id}`}> <button className='btn common w-100  text-white fw-semibold ' id='detailsBtn'>View Details</button></Link>
      </div>
    </div>
  </div>
</div>
    
    );
};

export default ShowJobDetails;