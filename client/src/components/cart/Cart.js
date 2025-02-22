import React from 'react'
import './Cart.css'
import Header from '../header-section/header';
import Footer from '../footer-section/footer';
import {Divider } from '@mui/material';
import Options from './Options';
import Subtotal from './Subtotal';
import Right from './Right';
import { useEffect, useState } from 'react';
const Cart = () => {

  const [cartdata, setCartdata] = useState("");
    // console.log(cartdata.length);

    const getdatabuy = async () => { 
        const res = await fetch("/cartdetails", {
            method: "GET", 
            headers: {
                Accept:"application/json",
                "Content-Type": "application/json"
            },
            credentials:"include"
        });
  
        const data = await res.json();
        // console.log(data.carts);

        if (res.status !== 201) {
            alert("No data available")
        } else {
            // console.log("data cart main hain");
            setCartdata(data.carts);
        }
    };

    useEffect(() => {
        getdatabuy();
    }, []);

  return (
      <div className='cart-page'>
      <Header />

      <div className="cart-section">
      {
      cartdata.length ?  
      <div className="cart-container">
          <div className="left-cart">
            <h1>Shopping Cart</h1>
            <p>Select all items</p>
            <span className="leftcartprice">Price</span>
            <Divider />
            { 
              cartdata.map((e,k)=>{
                return(
                  <>
                  <div className="item-container" key=''>
                    <img src={e.detailUrl} alt="imgitem" />
                    <div className="item-details">
                      <h3>{e.title.longTitle}</h3>
                      {/* <h3 className="differentprice">$225.99</h3> */}
                      <p className="usual">Usually dispatched in 8 days.</p>
                      <p>Eligible for FREE Shipping</p>
                      <img src="/Images/amazon-fulfilled.png" alt="logo" />
                      <Options deleteData={e.id} get={getdatabuy} />
                    </div>
                    <h3 className="item-price">${e.price.cost}</h3>
                  </div>
                  <Divider />
                  </>
                )
              })
            } 
              <Subtotal item={cartdata}/>
              </div>
              <div className="right-cart">
                <Right item={cartdata}/>
              </div>
            </div> :
            // "This cart is empty"
            <div className="cart-container">
              <div className="left-cart">
                
                <div className='empty-cart'>
                  <img className='img_empty' src="/Images/Empty_cart.svg" alt=''></img>
                
                  <div className="empty_cart_text">
                    <h1><b>Your Amazon Cart is empty</b></h1>
                    <p>Shop today's deals</p>
                  </div>
                </div>
              </div>  
            </div>
      }
      </div>

      <Footer />
      </div>
  )
}

export default Cart