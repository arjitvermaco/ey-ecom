import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import CategoryPage from "./pages/CategoryPage";
export default function App() {
  return (
    <div>
      {/* Define Routes  */}

      <Header/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:id" element={<CategoryPage/>}/>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />

        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </div>
  );
}
