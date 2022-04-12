import './App.css';
import React,{useEffect, useState} from "react"
import Header from "./components/header/Header"
import SignUp from "./components/signup/signup"
import Login from "./components/login/login"
import Footer from "./components/footer/footer"
import Home from "./components/home/Home"
import Product from "./components/product/Product"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Footer/>
      <Routes>
        <Route path = "/signup" element = {<SignUp/>}/>
        <Route path = "/login" element = {<Login/>}/>
        {/* <Route path = "/cart" element = {<ShoppingCart/>}/> */}
        <Route path='/' element = {<Home/>}/>
        <Route path = "/product" element = {<Product/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
