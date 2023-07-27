import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/header";
import Home from "./Components/Home/home";
import AboutUs from "./Components/AboutUs/about";
import Product from './Components/Product/product';
import Cart from "./Components/Cart/cart";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
                <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/aboutus" element={<AboutUs/>} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/cart" element={<Cart />} />
                </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;