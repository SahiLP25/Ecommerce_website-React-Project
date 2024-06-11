import React from 'react'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from'react-router-dom'
import Header from './components/Header'
import Seller from './pages/Seller'
import Display from './components/display/Display'



function App() {
  

  return (
    <BrowserRouter>

    <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Cart' element={<Cart/>}/>
        <Route path='Seller' element={<Seller/>}/>
        <Route path='Display' element={<Display/>}/>

       </Routes>
        
    </BrowserRouter>
  )
}

export default App
