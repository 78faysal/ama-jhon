import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import DashboardLayout from './Layout/DashboardLayout'
import Profile from './Pages/Profile/Profile'
import EditProfile from './Pages/EditProfile/EditProfile'
import Performence from './Pages/Performence/Performence'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/products',
        loader: () => fetch('https://dummyjson.com/products'),
        element: <Products></Products>
      },
      {
        path: '/products/:id',
        loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`),
        element: <ProductDetail></ProductDetail>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            path: '/dashboard/profile',
            element: <Profile></Profile>
          },
          {
            path: '/dashboard/editProfile',
            element: <EditProfile></EditProfile>
          },
          {
            path: '/dashboard/performence',
            element: <Performence/>
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>,
)
