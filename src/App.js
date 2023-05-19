import React from 'react';
import "./App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Navbar} from './components/navbar';
import {Shop} from './pages/shop/shop'
import {Cart} from './pages/cart/cart'
import { ShopContexProvider } from './context/shop-contex';


function App(){
  return ( 
  <div className="App">
    <ShopContexProvider>   
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Shop/>} /> 
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </Router>
    </ShopContexProvider>
  </div>
  );   //  for each rout we will set -element - will be place where component will be displayed 
}

export default App;
