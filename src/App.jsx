import { useEffect, useState } from 'react'
import './App.css'
// import Card from './components/'
//Navigation
import Layout from './Layout/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Customers from './pages/Customers/Customers';
import Product from './pages/Product/Product';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Product />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
    ],
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  );
}

export default App
