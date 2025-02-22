/* eslint-disable react/jsx-pascal-case */
import './App.css';
import Home from "./components/home/Home";
import Sign_up from './components/sign-up_sign-in/Sign_up';
import Sign_in from './components/sign-up_sign-in/Sign_in';
import {Routes, Route} from 'react-router-dom';
import BuyProduct from './components/getproduct/BuyProduct';
import Cart from './components/cart/Cart';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function App() {
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, [])

  return (
    // To use HTML in JS we use <></> to enclose all the html
    <>
    {
      data ? (
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Sign_up />}/>
          <Route path='/signin' element={<Sign_in />} />
          <Route path='/getproduct/:id' element={<BuyProduct />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </>
    ) : (
      <div className="circle">
            <CircularProgress />
            <h2>Loading...</h2>
          </div>
    )
    }
    </>
  );
}

export default App;
