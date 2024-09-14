import React, { useState } from 'react';
import './App.css';

import Layout from './Pages/layout';
import Home from './Pages/home';
import Login from './Pages/Login';
import Register from './Pages/register';
import Order from './Pages/order';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';



const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/store" element={<Home />} /> 
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/order" element={<Order />} />
          

      </Routes>
    </Router>
  );
};

export default App;