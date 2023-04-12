import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "../../Utilities/fakeDB";
import locationImg from "../../images/location.png";
import salaryImg from "../../images/salary.png";
import frame from "../../images/frame.png";
import frame_1 from "../../images/frame_1.png";
import frame_2 from "../../images/frame_2.png";
import frame_3 from "../../images/frame_3.png";
import frame_4 from "../../images/frame_4.png";

const FeauterDetails = () => {
  const { id } = useParams();
  console.log(id);
  const details = useLoaderData();
  const [jobDetail, setJobDetail] = useState({});
  useEffect(() => {
    const data = details.find((detail) => detail.id == id);
    setJobDetail(data);
  }, []);

  const handleApplyBtn = (id) => {
    // console.log(id);
    addToDb(id);
  };
  // const{id,img,location,salary}=jobDetail;
  return (
    <div>
      {/* <h3>Details</h3> */}
      <div className="row py-5 mt-4 gx-4">
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
              <p className="card-title">
                <img src={frame} />
                <span className="fw-semibold px-2">Salary : </span>
                {jobDetail.salary}
              </p>
              <p className="card-title">
                <img src={frame_1} />
                <span className="fw-semibold px-2">Job Title : </span>{" "}
                {jobDetail.title}
              </p>
              <h5 className="mt-5">Contact Information</h5>
              <hr />
              <p>
                <img src={frame_2} />
                <span className="fw-semibold px-2">Phone : </span>
                {jobDetail.phone}
              </p>
              <p>
                <img src={frame_3} />
                <span className="fw-semibold px-2">Email : </span>
                {jobDetail.email}
              </p>
              <p>
                <img src={frame_4} />
                <span className="fw-semibold px-2">Address :</span>
                {jobDetail.address}
              </p>
            </div>
          </div>
          <button
            onClick={() => handleApplyBtn(id)}
            className="btn common w-100 mt-3"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeauterDetails;
