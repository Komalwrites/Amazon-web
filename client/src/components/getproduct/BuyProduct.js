/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import './BuyProduct.css'
import Header from '../header-section/header';
import Footer from '../footer-section/footer';
import {Divider } from '@mui/material';
import { useNavigate, useParams } from 'react-router';
import  { useEffect, useState , useContext} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Logincontext } from "../Context/ContextProvider";
import CircularProgress from '@mui/material/CircularProgress';

const BuyProduct = () => {

  const {id} = useParams('');

  const { account, setAccount } = useContext(Logincontext);

  const history = useNavigate("");

  const [inddata, setInddata] = useState("");

  const getinddata = async () => {
    const res = await fetch(`https://amazon-web-server-6o27.onrender.com/getproduct/${id}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
    });

    const data = await res.json();
    // console.log(data);

    if (res.status !== 201) {
      alert("no data available")
  } else {
      // console.log("ind mila hain");
      setInddata(data);
  }
};

useEffect(() => {
  setTimeout(getinddata, 1000)
}, [id]);

const addtocart = async (id) => {
  // console.log(id);
  const check = await fetch(`https://amazon-web-server-6o27.onrender.com/addcart/${id}`, {
      method: "POST",
      headers: { 
          Accept: "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          inddata
      }),
      credentials: "include"
  });
  // console.log(check);
  const data1 = await check.json();
  // console.log(data1);

  if (check.status !== 201) {
      toast.error("User invalid!", {
        position: "top-center"
    }) }
  else if(check.status === 401){
    history("/signin");
       } 
  else {
    toast.success("Data added in your Cart 😃!", {
      position: "top-center"
    });
    setAccount(data1);
    history("/cart");
  }
}


  return (
    <div className='getProduct-section'>
      <Header />
      {inddata && Object.keys(inddata).length &&
      <div className='getProduct-list'>
        <div className="getProduct-container">
          <div className="left-getProduct">
              <img src={inddata.detailUrl} alt="" />
              <div className="getProduct-btns">
                <button className="getProduct-btn1" onClick={()=>addtocart(inddata.id)}>Add to Cart</button>
                <button className="getProduct-btn2">Buy Now</button>
              </div>
          </div>
          <ToastContainer />
          <div className="right-getProduct">
            <h3>{inddata.title.longTitle}</h3>
            <Divider />
            <div className="pricing">
                <p className='discount-percent'>-{inddata.price.discount}</p>
                <p className='dollar'>$</p>
                <p className="cost"><b>{inddata.price.cost}</b></p>
            </div>
            <p className='mrp'>List Price: <del>${inddata.price.mrp}</del></p>
            <p className='about-this'>About this item</p>
            <ul className='description'>
                <li>{inddata.description.line1}</li>
                <li>{inddata.description.line2}</li>
                <li>{inddata.description.line3}</li>
                <li>{inddata.description.line4}</li>
                <li>{inddata.description.line5}</li>
            </ul>
          </div>
        </div>
      </div>
}
      {!inddata ? 
      <div className="circle">
        <CircularProgress />
        <h2> Loading....</h2>
      </div>
       : ""
      }
       <Footer />
    </div>
  )
}

export default BuyProduct
