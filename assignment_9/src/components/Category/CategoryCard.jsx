import React from "react";

const CategoryCard = ({category}) => {
    const{id,title,img,postNo}=category;
  return (

      <div className="col-lg-3 col-md-3 col-12">
        <div className="card w-100 bg-body-secondary p-3 text-justify w-100 h-100 mb-2">
          <img src={img} className="img-fluid w-25 px-2" alt="category img" />
          <div className="card-body d-flex flex-column gap-2">
            <h5 className="card-title text-body">{title}</h5>
            <p className="card-text text-body-tertiary text-capitalize fw-semibold">
              {postNo} jobs available
            </p>
          </div>
        </div>
      </div>

  );
};

export default CategoryCard;
