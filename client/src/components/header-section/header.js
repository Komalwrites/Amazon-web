//used rafce to get boilder plate code for react in js file
import React from 'react';
import { Logincontext } from "../Context/ContextProvider";
import  { useContext, useEffect,  useState} from 'react';
import Leftheader from './Leftheader';

//adding css file
import './header.css';  

//adding icons
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import EmojiFlagsOutlinedIcon from '@mui/icons-material/EmojiFlagsOutlined';
import Badge from '@mui/material/Badge'; //Badge for cart
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { NavLink, useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Header = () => {

  const { account, setAccount } = useContext(Logincontext);

  const [text, setText] = useState("");
  // console.log(text);

  const [liopen, setLiopen] = useState(true);


  const products = useSelector((state)=> state.products);
  const history = useNavigate();

  const [drOpen, setDrOpen] = useState(false);

  const getdetailsvaliduser = async () => {
    const res = await fetch("/validuser", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: "include"
    });

    const data = await res.json();
    // console.log(data);

    if (res.status !== 201) {
        console.log("Login first!");
    } else {
        // console.log("cart add ho gya hain");
        setAccount(data);
    }
}

const handleDrOpen = () => {
  setDrOpen(true);
}

const handleDrClose = () => {
  setDrOpen(false);  
}

const getText = (items) =>{
  setText(items);
  setLiopen(false);
}

useEffect(() => { 
    getdetailsvaliduser();
}, []);

  const logoutUser = async () => {
    const res2 = await fetch("/logout", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: "include"
    });

    const data2 = await res2.json();
    // console.log(data2);

    if (res2.status !== 201) {
        console.log("Login first!");
    } else {
        // console.log("cart add ho gya hain");
        toast.success("Logout Successfully done 😃!", {
                      position: "top-center"
                  });
        history("/");
        setAccount(false);
        
    }
}

  return (
    <header>

      {/* *******************************************Nav-Bar****************************************** */}
      <nav>
        <div className="navlogo border">
          <NavLink to='/'><img src= "/Images/nav-bar-logo.png" alt="" /></NavLink>
        </div>

        <div className="nav-location border"> 
          <div className="location-icon">
            <LocationOnOutlinedIcon />
          </div>
          <div className="location-pin">
            <p className="location-title">Deliver to</p>
            <p className="location-name">India</p>
          </div>
        </div>

        <div className="nav-searchbar">
          <select className="search-select">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search Amazon" onChange={(e)=>getText(e.target.value)} className="search-input" />
          <div className="search-icon">
             <SearchIcon sx={{fontSize:31}}/>
           </div> 
           <div className='searchList'>
           {
             text &&
             <List className="extrasearch" hidden={liopen}>
                 {
                     products.data.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                        <ListItem>
                          <NavLink to={`/getproduct/${product.id}`} onClick={() => setLiopen(true)}>
                            {product.title.longTitle}
                          </NavLink>
                        </ListItem>
                     ))
                 }
             </List>
           }
           </div>
        </div>

        <div className="nav-language border">
          <div className="country-flag">
            <EmojiFlagsOutlinedIcon />
          </div> 
          <select className="select-lang">
            <option>
              <b>EN</b>
            </option>
          </select>
        </div>
        
        <div className="nav-sign-in border">
          <div>
            <NavLink className="sign-in" to="/signin">Hello, sign in</NavLink>
          </div>
          <select className="accounts">
            <option>
              <p>Account & Lists</p>
            </option>
          </select>
        </div>

        <div className="nav-returns-orders border">
          <div>
            <a className="returns" href="">Returns</a>
          </div>
          <div>
            <a className="orders" href="">& Orders</a>
          </div>
        </div>
        {
          account ?
          (<div className="nav-cart border"> 
            <NavLink to="/cart" className="badge-link">
            <Badge badgeContent={account.carts.length} color="primary" className="cart-badge">
              <ShoppingCartOutlinedIcon sx={{fontSize:32}} className="cart-icon"/>
            </Badge>
            <div>
              <a className="cart" href="/cart">Cart</a>
            </div> 
            </NavLink>
            </div>)
           : 
           (<div className="nav-cart border"> 
           <NavLink to="/signin" className="badge-link">
           <Badge badgeContent={0} color="primary" className="cart-badge">
             <ShoppingCartOutlinedIcon sx={{fontSize:32}} className="cart-icon"/>
           </Badge>
           <div>
             <a className="cart" href="/signin">Cart</a>
           </div> 
           </NavLink>
           </div>)
        }
      </nav>

      {/*******************************************Nav-Panel***********************************************/}
      <div className="panel">
        <div className="panel-data">
            <div className="panel-all"  onClick={handleDrOpen} >
                <div className="all-icon">
                    <DensityMediumIcon sx={{fontSize:22}} onClick={handleDrOpen}   />   
                </div>
                <div>
                    <b><p className="all" >All</p></b>
                </div> 
            </div>
            <Drawer open={drOpen}>
                      <Leftheader logClose={handleDrClose} logOut={logoutUser}></Leftheader>
                      <div  className="close_btn" onClick={handleDrClose} >
                        <CloseOutlinedIcon  />
                      </div>  
            </Drawer> 
            <ToastContainer  />
            <div className="panel-ops">
                <a className="border" href="">Today's Deals</a>
                <a className="border" href="">Buy Again</a>
                <a className="border" href="">Customer Service</a>
                <a className="border" href="">Registry</a>
                <a className="border" href="">Gift Cards</a>
                <a className="border" href="">Sell</a>
            </div>
        </div>
    </div>
    </header>
  )
}

export default Header
//Exporting header
