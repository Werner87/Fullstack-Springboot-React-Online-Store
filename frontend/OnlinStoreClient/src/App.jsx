import './App.css';
import axios from 'axios';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import {Routes,Route, Router, useParams} from 'react-router-dom';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Account from './components/account/Account';

function App() {

  const [users, setUsers] = useState();
  const [cart, setCart] = useState();
  const [products, setProducts] = useState();

  useEffect(() =>{
    getProducts();
    getUsers();
    getCart();
  },[])

  const getUsers = async () =>{

    try{

      const { data } = await axios.get("/api/users");
      setUsers(data);
    }
    catch(err)
    {
      console.log(err);
    }
  }


  const getCart = async () =>{

    try{

      const { data } = await axios.get("/api/cart");
      setCart(data);
    }
    catch(err)
    {
      console.log(err);
    }
  }


  const getProducts = async () =>{

    try{

      const { data } = await axios.get("/api/products");
      setProducts(data);
    }
    catch(err)
    {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home products={products} setCart={setCart}/>}/>
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
            <Route path="/account" element={<Account users={users}/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
