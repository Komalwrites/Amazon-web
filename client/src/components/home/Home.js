import React, { useEffect } from 'react'
import './Home.css';
import Banner from './Banner';
import Slide from './Slide';
import Header from '../header-section/header';
import Footer from '../footer-section/footer';
import { getProducts } from '../redux/actions/action';
import { useSelector, useDispatch } from "react-redux";


const Home = () => {

    const dispatch = useDispatch();
    const products = useSelector((state)=> state.products);

    useEffect(() => {
      dispatch(getProducts());
    }, [dispatch]);

  return (
    <div>
    <Header />
    <div className="main-section">
      <div className="banner-part">
        <Banner />
      </div>
      <Slide items={products.data} />
    </div>
    <Footer />
    </div>
  )
}

export default Home
