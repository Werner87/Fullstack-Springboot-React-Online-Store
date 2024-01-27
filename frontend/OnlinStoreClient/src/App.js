import './App.css';
import axios from 'axios';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import {Routes,Route} from 'react-router-dom';
import Home from './components/home/Home';

function App() {

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
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home products={products}/>}></Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
