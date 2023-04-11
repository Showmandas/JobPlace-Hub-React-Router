import React from 'react';
import {  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Charts = () => {
  const assignmentData = [
    { id:1,name: 'A-1', marks: 60 },
    { id:2,name: 'A-2', marks: 58 },
    { id:3,name: 'A-3', marks: 60 },
    { id:4,name: 'A-4', marks: 60 },
    { id:5,name: 'A-5', marks: 58 },
    { id:6,name: 'A-6', marks: 52 },
    { id:7,name: 'A-7', marks: 60 }
  ];

  return (
    <div className='m-auto mt-5 py-5 text-center'>
        <h4 className='mb-5'>Area Chart of Assignment</h4>
<AreaChart width={1000} height={400} data={assignmentData}>
    <CartesianGrid strokeDasharray="4 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
  </AreaChart>
    </div>
    
  );
};

export default Charts;
