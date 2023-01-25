import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SecondPage from './Components/SecondPage';
import ThirdPage from './Components/ThirdPage';
import FirstPage from './Components/FirstPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/home",
        element: <FirstPage />,
      },
      {
        path: "/about-us",
        element: <SecondPage/>,
      },
      {
        path:"/portfolio",
        element: <ThirdPage />
      }
    ],
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
