import { useState } from "react";
import CardApp from "./Components/CardApp";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import { Route, Routes } from "react-router-dom";
import Products from "./Pages/Products";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import ProductDetails from "./Pages/ProductDetails";
import PrivateRoute from "./Components/PrivateRoute";
import Category from "./Pages/Category";

function App() {
  
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/products/:categoryName?" element={<PrivateRoute> <Products /> </PrivateRoute>}/>
      <Route path="/sign" element={<SignUp />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="ProductDetails/:id" element={<ProductDetails />}/>
      <Route path="/category" element={<Category />}></Route>
    </Routes>
    </>
  );
}

export default App;
