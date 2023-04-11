import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../Utilities/fakeDB';
import { useLoaderData } from 'react-router-dom';
import ShowJobDetails from './ShowJobDetails';

const ApplyJobs = () => {
    const [job,setJob]=useState([])
    const detailData=useLoaderData()
    // console.log(detailData);
    useEffect(()=>{
        const savedjobs=getStoredCart();
        let newJob=[]
    // console.log(jobs);
    for(const id in savedjobs){
        const findJobs=detailData.find(job=> job.id===id)
        if(findJobs){

            newJob.push(findJobs)
        }

    }
    setJob(newJob)

    },[])
    
    console.log(job);
    return (
        <div>
        
            {
                job.map(jobdata=><ShowJobDetails jobdata={jobdata} key={jobdata.id}/>)
            }
        </div>
    );
};

export default ApplyJobs;