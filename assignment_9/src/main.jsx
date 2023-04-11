import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home/Home';
import Feature from './components/Featured/Feature';
import FeauterDetails from './components/Featured/FeauterDetails';
import Blog from './components/Blog';
import ErrorPage from './components/ErrorPage.jsx';
import Charts from './components/Charts';
import ApplyJobs from './components/ApplyJobs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'featureDetails/:id',
        element:<FeauterDetails/>,
        loader:()=>fetch(`../public/Features.json`)

      },
      {
        path:'blog',
        element:<Blog/>
      },
      {
        path:'charts',
        element:<Charts/>
      },
      {
        path:'applyjobs',
        element:<ApplyJobs/>,
        loader:()=>fetch(`../public/Features.json`)
      }
      
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>,
)
