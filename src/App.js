import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  const [basket, setBasket] = useState([]);
  const [collections, setCollections] = useState([]);

  async function fetchCollections() {
    const response = await axios.get("https://fakestoreapi.com/products");
    setCollections(response.data);
  }

  useEffect(() => {
    fetchCollections();
  }, []);

  function addToBasket(addedItem) {
    const existingItem = basket.find((item) => +item.id === +addedItem.id);
    if (existingItem) {
      existingItem.quantity += 1;
      setBasket([...basket]);
    } else {
      setBasket([...basket, { ...addedItem, quantity: 1 }]);
    }
  }

  function changeQuantity(itemInfo, quantity) {
    setBasket(
      basket.map((item) =>
        item.id === itemInfo.id ? { ...item, quantity: +quantity } : item
      )
    );
  }

  function removeItem(removingItem) {
    setBasket(basket.filter((item) => +item.id !== +removingItem.id));
  }

  function numberOfItems() {
    return basket.reduce((total, item) => total + item.quantity, 0);
  }

  return (
    <Router>
      <Nav numberOfItems={numberOfItems()} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/category/:category" element={<Category />} />
        <Route path="/products/:id" element={<Product items={collections} addToBasket={addToBasket} />}/>
        <Route path="/cart" element={<Cart items={collections} basket={basket} changeQuantity={changeQuantity} removeItem={removeItem}/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
