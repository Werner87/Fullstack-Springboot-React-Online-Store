import './App.css';
import axios from 'axios';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import {Routes,Route, Router} from 'react-router-dom';
import Home from './components/home/Home';
import { Accordion } from '@mui/material';
import Account from './components/account/Account';
import Cart from './components/cart/Cart';

function App() {

  const [users, setUsers] = useState();

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

  const [cart, setCart] = useState();

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

  const [products, setProducts] = useState();

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

  useEffect(() =>{
    getProducts();
    getUsers();
    getCart();
  },[])

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home products={products}/>}/>
            <Route path="/cart" element={<Cart cart={cart}/>}/>
            <Route path="/account" element={<Account users={users}/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
