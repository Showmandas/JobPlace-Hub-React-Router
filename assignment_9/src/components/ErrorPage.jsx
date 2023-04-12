import { FaceFrownIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="container d-flex flex-column justify-content-center px-5 mx-auto my-8">
      <FaceFrownIcon className="w-25 m-auto" />
      <div className="max-w-md text-center">
        <h2 className="mb-8 font-extrabold text-9xl text-yellow-500">
          <span className="sr-only">Error</span>
          &nbsp; <span className=" text-warning">{status || 404}</span>
        </h2>
        <p className=" fw-semibold mb-5">{error?.message}</p>
        <Link to="/" className="btn">
          <button className="common btn">Back to homepage</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
