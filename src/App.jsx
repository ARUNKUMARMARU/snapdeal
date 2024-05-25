import React, { useEffect, useState } from 'react';
import './App.css'
import logo from './assets/logo.jpg'
import cart from './assets/cart.jpg'
import user from './assets/user2.jpg'
import landing from './assets/landing_banner1.jpg'
import { Input, Modal, Button } from 'antd';
import {UserOutlined, HeartOutlined, GiftOutlined } from "@ant-design/icons"
const { Search } = Input;
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SignIn from './Signin';
import Project from './Project';

function App() {
  return (
    <div>
      <Router>
      <div>
        <Routes>
        <Route path="/" element={<Project />} />
          <Route path="/signin" element={<SignIn />} />
         
        </Routes>
      </div>     
        
      
    </Router>
    </div>
  )
}

export default App