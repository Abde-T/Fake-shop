import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Category from "./pages/Category";
import Cart from "./pages/Cart";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/category/:category" element={<Category />} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/cart"  element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
