import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Contact from './pages/contact/Contact.jsx';
import About from './pages/about/About.jsx';
import Shop from './pages/shop/Shop.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  
  children: [
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/contact",
      element: <Contact/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/shop",
      element: <Shop/>,
    },
  ],
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
