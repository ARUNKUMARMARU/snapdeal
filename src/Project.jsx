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
import { useNavigate } from 'react-router-dom';


function Project() {
  const [isModal, setIsModal] = useState(false);
  const [isFashion, setIsFashion] = useState(false);
  const [isFashion2, setIsFashion2] = useState(false);
  const navigate = useNavigate();
  const onSearch = ()=>{
console.log('test')
  }
  const onCancel = ()=>{
    setIsModal(!isModal)
  }
  const handleSignout = ()=>{
    setIsModal(!isModal)
  }
  const handleSignin = ()=>{
    setIsModal(!isModal)
    
  }
  const handleSignin2 = ()=>{
    navigate('/signin')
    setIsModal(!isModal)
    
  }
  const mensfashion = ()=>{
    setIsFashion(!isFashion)
  }
  const womensfashion = ()=>{
    setIsFashion2(!isFashion2)
  }
  return (
    <div>     
       
    
      <div className='top'>
       <div className='img'>
       <img src={logo} alt="Logo" style={{backgroundColor:'white', height:'50%'}}/>
       </div>
       <div className='search'>    
       
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
        </div>
        <div className='cart'>
          <img src={cart} alt="cart" style={{width:'35px'}}/>
        <p style={{color:'white', fontSize:'18px'}}>Cart</p>
        </div>
        
          <div className='signin'>
          <button onMouseOver={handleSignin} 
          //onMouseLeave={handleSignout}
          style={{backgroundColor:'red', border:'none', color:'white'}}>Sign in &nbsp;
          <img src={user} alt="user" style={{width:'25px', paddingLeft:'10px'}}/>
          </button>
          
          <Modal
           open={isModal}
           title="Sign In"    
          
      footer={[
        <Button key="signin" type="primary"onClick={handleSignin2}>Sign In</Button>,
       
        <Button key="submit" type="primary" onClick={onCancel} >Sign Up</Button>,

        <Button key="cancel" onClick={onCancel}>Cancel</Button>
      ]}
      closable={false}>
        <ul style={{listStyle:'none'}}>
          <li><UserOutlined /> &nbsp; Your Account</li>
          <li><GiftOutlined /> &nbsp;Your Orders</li>
          <li><HeartOutlined /> &nbsp; Shortlists</li>
        </ul>
         </Modal>
          </div>  

      </div>

      <div >
      {/* <div className='landing'>
        <marquee><img src={landing} alt="landing" /></marquee>
      </div> */}
      <div className='left'>
        
        <div className='left-list'>
        <h3>Top Categories</h3>
       <div onMouseOver={mensfashion} >
       <p >Men's Fashion
       </p> {isFashion ? <div style={{paddingLeft:'20px'}}>
        <ul>
          <li>Foot Wear</li>
          <li>Clothings</li>
          <li>Bags</li>
        </ul>
       </div> : ""} 
       </div>
       <div onMouseOver={womensfashion} >
       <p >Women's Fashion
       </p> {isFashion2 ? <div style={{paddingLeft:'20px'}}>
        <ul>
          <li>Foot Wear</li>
          <li>Clothings</li>
          <li>Bags</li>
        </ul>
       </div> : ""} 
       </div>
       <p></p>
       <p>Home & Kitchen</p>
       <p>Toys, Kids</p>
       <p>Home & Kitchen</p>
        </div>
      </div>
      </div>
     
     
    </div>
    
  )
}

export default Project;