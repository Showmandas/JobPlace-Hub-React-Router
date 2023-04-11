import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FeatureCard from './FeatureCard';

const Feature = () => {
    const [featureData,setFeatureData]=useState([]);

    useEffect(()=>{
        fetch('Features.json')
        .then(res=>res.json())
        .then(data=>setFeatureData(data))

    },[])
    return (
        <div className='container my-5 py-4'>
           <h1 className='text-center display-4 fw-bold mb-3'>Featured Jobs</h1>
            <p className='text-center text-body-secondary fs-5 fw-semibold'>Explore thousands of job opportunities with all the information you need. Its your future</p>
             <div className="row gy-5 mt-5">
                {
                    featureData.slice(0,4).map(feature=><FeatureCard feature={feature} key={feature.id}/>)
                }

             </div>
        </div>
    );
};

export default Feature;