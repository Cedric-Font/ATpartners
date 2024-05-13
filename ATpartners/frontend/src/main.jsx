import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StyledEngineProvider } from '@mui/material/styles';
import NavBarDesktop from './navBarDesktop/NavBarDesktop.jsx';
import Footer from './footer/Footer.jsx';
import './index.css'
import Form from './form/Form.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/test",
    element: <Footer />,
  },
  {
    path: "/contact",
    element: <Form />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
     <RouterProvider router={router} />
     </StyledEngineProvider>
  </React.StrictMode>,
)
