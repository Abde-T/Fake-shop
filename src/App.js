import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [basket, setBasket] = useState([]);
  const [collections, setCollections] = useState([]);
 
  async function getCollections() {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    setCollections(data);

    }
  useEffect(() => {
    getCollections();
  }, []);

  function addToBasket(addedItem) {
    const dupeItem = basket.find(collections => +collections.id === +addedItem.id)
    dupeItem
    ?
    dupeItem.quantity += 1
    :
    setBasket([...basket, {...addedItem, quantity: 1}])
  }

  function changeQuantity(iteminfo, quantity) {
    setBasket(basket.map(collections => {
      return collections.id === iteminfo.id
              ?
              {
                ...collections,
                quantity: +quantity,
              }
              :
              collections
    }
    ))
  } 

  function removeItem(removingItem){
    setBasket(basket.filter(item => {
      return +item.id !== +removingItem.id
    }))
  }

  function numberOfItems()
  {
    let numOfItems = 0
    basket.forEach(items => {
      numOfItems += items.quantity
    })
    return numOfItems
  }

  useEffect(() => {
    //console.log(basket)
  }, [basket])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/category/:category" element={<Category />} />
        <Route path="/products/:id" element={<Product items={collections} addToBasket={addToBasket} />} />
        <Route path="/cart"  element={<Cart items={collections} basket={basket} changeQuantity={changeQuantity} removeItem={removeItem}/>} />
      </Routes>
    </Router>
  );
}

export default App;
