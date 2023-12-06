
import { Routes, Route } from 'react-router';
import './App.css';
import React from 'react'
import RootLayout from './components/RootLayout';
import Home from './Pages/Home';
import AuthRoutes from './components/AuthRoutes';
import Login from './Pages/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from './Pages/AdminPage/AddProduct';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />



          <Route path='user/login' element={<Login />} />
          <Route path='addproduct' element={<AddProduct />} />




        </Route>
      </Routes>
      <ToastContainer autoClose={1000} position='top-right' />
    </>
  )
}

export default App

