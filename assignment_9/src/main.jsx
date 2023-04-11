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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'featureDetails/:id',
        element:<FeauterDetails/>,
        loader:({params})=>fetch(`../public/Features.json/${params.id}`)

      },
      
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>,
)
