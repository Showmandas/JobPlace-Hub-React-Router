import React, { useEffect,useState } from 'react';
import { useLoaderData,useParams} from 'react-router-dom';

const FeauterDetails = () => {
    // const featureInfo=useLoaderData();
    // console.log(featureInfo);
    // const{id}=useParams();
    // console.log({id});
    const{jobdetail,setJobDetails}=useState({})
    useEffect(()=>{
        // const data=jobdetail
    })
    const{id,img,location,salary}=featureInfo;
    return (
        <div>
            <h3>Details</h3>
            <h2>{location}</h2>
        </div>
    );
};

export default FeauterDetails;