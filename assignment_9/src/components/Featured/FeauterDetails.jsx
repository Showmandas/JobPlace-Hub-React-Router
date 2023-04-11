import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const FeauterDetails = () => {
  const { id } = useParams();
  console.log(id);
  const details = useLoaderData();
  const [jobDetail, setJobDetail] = useState({});
  useEffect(() => {
    const data = details.find((detail) => detail.id == id);
    setJobDetail(data);
  }, []);
  // const{id,img,location,salary}=jobDetail;
  return (
    <div>
      {/* <h3>Details</h3> */}
      <div className="row py-5 mt-5 gx-4">
        <div className="col-lg-7 col-12">
          <p>
            <span className="fw-semibold">Job Description: </span>
            {jobDetail.desc}
          </p>
          <p>
            <span className="fw-semibold">Job Responsibility: </span>
            {jobDetail.resp}
          </p>
          <p>
            <span className="fw-semibold">Educational Requirements: </span>
            {jobDetail.edu}
          </p>
          <p>
            <span className="fw-semibold">Experience: </span>
            {jobDetail.experience}
          </p>
        </div>
        <div className="col-lg-5 col-12">
          <div className="card  bg-body-secondary p-4">
            <div className="card-body">
                <h5>Job Details</h5>
                <hr />
              <p className="card-title"><span className="fw-semibold">Salary : </span>{jobDetail.salary}</p>
              <p className="card-title"><span className="fw-semibold">Job Title : </span> {jobDetail.title}</p>
             <h5 className="mt-5">Contact Information</h5>
             <hr />
             <p><span className="fw-semibold">Phone : </span>{jobDetail.phone}</p>
             <p><span className="fw-semibold">Email : </span>{jobDetail.email}</p>
             <p><span className="fw-semibold">Address :</span>{jobDetail.address}</p>
            </div>
          <button className="btn common">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeauterDetails;
