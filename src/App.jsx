import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Order from './Pages/Order';
import Stock from './Pages/Stock';
import Profile from './Pages/Profile';
import Payments from './Pages/Payments.jsx';
import Purchases from './Pages/Purchases';
import Home from './Pages/home.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/order" element={<Order />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route path="purchase" element={<Purchases />} /> {/* Default view */}
          <Route path="stock" element={<Stock />} />
          <Route path="profile" element={<Profile />} />
          <Route path="payments" element={<Payments />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
