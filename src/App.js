/* eslint-disable no-undef */
import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Anomalies from "./Components/Admin/Anomalies/Anomalies"
import DataInsight from "./Components/Admin/DataInsight/DataInsight"
import ChoroplethMap from "./Components/Admin/DataInsight/MapComponent"
import TrendsChart from "./Components/Admin/Trends/Trends"
import Interactivity from "./Components/Admin/Interactivity/Interactivity"
import Emission from "./Components/Admin/Sustainabilty/Emission"
import Main from "./Components/Admin/Interactivity/Main"
import Dashboards from "./Components/Admin/Dashboard/Dashboard"
import MainPage from "./Components/Home/MainPage"
import HomeMainNew from "./Components/HomeMain/HomeMainNew"
import Desktop12 from "./Components/Home/Desktop12"
import SplineScene from "./Components/SplineScene"
import Interactive3DModelDemo from "./Components/Interactive3DModel/Interactive3DModelDemo"
import DuckModel from "./Components/Interactive3DModel/DuckModel"
import AboutUsMain from "./Components/AboutUs/AboutUsMain"
import ContactUsMain from "./Components/ContactUs/ContactUsMain"
import FAQMain from "./Components/FAQ/FAQMain"
import "leaflet/dist/leaflet.css";

import React from "react";

function App() {
  

  const router = createBrowserRouter([
    {
      path: '/Home',
      element: <MainPage />, 
    },
  
    {
      path: '/',
      element: <HomeMainNew />,
    },
    // {
    //   path: '/Desktop12',
    //   element: <Desktop12 />,
    // },
    // {
    //   path: '/spline',
    //   element: <SplineScene />,
    // },
    // {
    //   path: '/3d-model',
    //   element: <Interactive3DModelDemo />,
    // },
    {
      path: '/duck',
      element: <DuckModel />,
    },
    {
      path: '/About',
      element: <AboutUsMain />,
    },
    {
      path: '/ContactUs',
      element: <ContactUsMain />,
    },
    {
      path: '/FAQ',
      element: <FAQMain />,
    },
    {
      path: '*',
      element: <h1>404 - Page Not Found</h1>,
    },
  ]);

  return (
     <RouterProvider router={router} />
  );
}

export default App;
