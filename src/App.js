import React, { Component } from 'react'
import './App.css';


import MainComponent from './component/MainComponent';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Body from './Body';
import _01_IspDigital from './component/pages/_01_IspDigital';
import _02_Edufy from './component/pages/_02_Edufy';
import _03_Biznify from './component/pages/_03_Biznify';
import _04_InfinityLog from './component/pages/_04_InfinityLog';
import _05_Soft_Development from './component/pages/_05_SoftDevelopment';
import _06_WebAppDev from './component/pages/_06_WebAppDev';
import _07_IspBusinessSolution from './component/pages/_07_IspBusinessSolution';
import _08_EducationManagement from './component/pages/_08_EducationManagement';
import _9_ProductsBasedService from './component/pages/_9_ProductsBasedService';
import _10_CableTvBusinessSollution from './component/pages/_10_CableTvBusinessSollution';
import _11_ServiceBasedBusiness from './component/pages/_11_ServiceBasedBusiness';
import _12_E_CommerceSollution from './component/pages/_12_E_CommerceSollution';
import _13_ContentManagementSystem from './component/pages/_13_ContentManagementSystem';
import _14_AboutUs from './component/pages/_14_AboutUs';
import _15_Partnership from './component/pages/_15_Partnership';
import _16_LifeAtSoftifybd from './component/pages/_16_LifeAtSoftifybd';
import _17_JobandCarrer from './component/pages/_17_JobandCarrer';
import _19_ContactUs from './component/pages/_19_ContactUs';
import _20_NewsAndBlogs from './component/pages/_20_NewsAndBlogs';
import _21_TermsOfServices from './component/pages/_21_TermsOfServices';
import _22_PrivacyPolicy from './component/pages/_22_PrivacyPolicy';
import _23_CompanyOverview from './component/pages/_23_CompanyOverview';
import Company from './component/Company';
import GotoMarket from './component/GotoMarket';


const router = createBrowserRouter(

  [
    {
      path: "/",
      element: <><Body /></>,
      errorElement: <>error occurs</>,
      children: [
        {
          index: true,
          element: <MainComponent />,
        },
        {
          path:"/company",
          element:<Company/>,
        },
        {
          path: "/pages/ispDigital",
          element: <><_01_IspDigital /></>,
        },
        {
          path: "/pages/edufy",
          element: <><_02_Edufy /></>,
        },
        {
          path: "/pages/biznify",
          element: <><_03_Biznify /></>,
        },
        {
          path: "/pages/infinityLog",
          element: <><_04_InfinityLog /></>,
        },
        {
          path: "/pages/softDevelopment",
          element: <><_05_Soft_Development /></>,
        },
        {
          path: "/pages/webappdev",
          element: <><_06_WebAppDev /></>,
        },
        {
          path: "/pages/GoToMarket",
          element: <><GotoMarket/></>,
        },
        {
          path: "/pages/ispBusiSolution",
          element: <><_07_IspBusinessSolution /></>
        },
        {
          path: "/pages/eduManagement",
          element: <><_08_EducationManagement /></>
        },
        {
          path: "/pages/ProBasBusi",
          element: <><_9_ProductsBasedService /></>
        },
        {
          path: "/pages/CabTvBusiSolu",
          element: <><_10_CableTvBusinessSollution /></>
        },
        {
          path: "/pages/ServiBasBusi",
          element: <><_11_ServiceBasedBusiness /></>
        },
        {
          path: "/pages/E-comSolu",
          element: <><_12_E_CommerceSollution /></>
        },
        {
          path: "/pages/ContManagSys",
          element: <><_13_ContentManagementSystem /></>
        },
        {
          path: "/pages/aboutUs",
          element: <><_14_AboutUs /></>
        },
        {
          path: "/pages/Partnership",
          element: <><_15_Partnership /></>
        },
        {
          path: "/pages/lifeAtSoftifybd",
          element: <><_16_LifeAtSoftifybd /></>
        },
        {
          path: "/pages/JobsAndCareer",
          element: <><_17_JobandCarrer /></>
        },
        {
          path: "/pages/CompanyOverview",
          element: <><_23_CompanyOverview/></>
        },
        {
          path: "/pages/contactUs",
          element: <><_19_ContactUs /></>
        },
        {
          path: "/pages/newsAndblogs",
          element: <><_20_NewsAndBlogs /></>,
        },
        {
          path: "/pages/termsofuse",
          element: <><_21_TermsOfServices /></>,
        },
        {
          path: "/pages/privacynotice",
          element: <><_22_PrivacyPolicy /></>,
        },
      ],
    },
   


  ]);

export class App extends Component {
  // cloned from here = https://softifybd.com/

  render() {
    return (
      <>

        {/* <Navbar  /> */}
        <RouterProvider router={router} />
        {/* <Footer /> */}
      </>
    )
  }
}

export default App