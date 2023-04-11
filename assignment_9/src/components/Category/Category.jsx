import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {
    const [categoryData,setCategoryData]=useState([])

    useEffect(()=>{
        fetch('CategoryList.json')
        .then(res=>res.json())
        .then(data=>setCategoryData(data))
    },[])
    return (
        <div className='container  my-5 py-5'>
            <h1 className='text-center display-4 fw-bold mb-3'>Job Category List</h1>
            <p className='text-center text-body-secondary fs-5 fw-semibold'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='row mt-5 py-4'>

            {
                categoryData.map(category=>
                    <CategoryCard category={category} key={category.id}/>
                )
            }
            </div>
        </div>
    );
};

export default Category;