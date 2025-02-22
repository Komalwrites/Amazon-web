import React from 'react'
import './footer.css';
import {NavLink} from 'react-router-dom';
import {Divider} from '@mui/material';
const footer = () => {
    const top = () =>{
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    }
  return (
    <footer>
        {/* <!-- Foot-panel-1 --> */}
        <div className="foot-panel1">
            <p  onClick={top()} style={{cursor:"pointer"}}>Back to top</p>
        </div>

         {/* <!-- Foot-panel-2 --> */}
        <div className="foot-panel2">
            <ul className="list">
                <p><b>Get to know us</b></p>
                <li className="footer-links">
                    <a href="" className="footer-link">Careers</a>
                    <a href="" className="footer-link">Blog</a>
                    <a href="" className="footer-link">About Amazon</a>
                    <a href="" className="footer-link">Investor Relations</a>
                    <a href="" className="footer-link">Amazon Devices</a>
                    <a href="" className="footer-link">Amazon Science</a>
                </li>
            </ul>
            <ul  className="list">
                <p><b>Make Money with Us</b></p>
                <li className="footer-links">
                    <a href="" className="footer-link">Sell products on Amazon</a>
                    <a href="" className="footer-link">Sell on Amazon Business</a>
                    <a href="" className="footer-link">Sell apps on Amazon</a>
                    <a href="" className="footer-link">Become an Affiliates</a>
                    <a href="" className="footer-link">Advertise Your Products</a>
                    <a href="" className="footer-link">Self-Publish with Us</a>
                    <a href="" className="footer-link">Host an Amazon Hub</a>
                    <a href="" className="footer-link">See More Make Money with Us</a>
                </li>
            </ul>
            <ul  className="list">
                <p><b>Amazon Payment Products</b></p>
                <li className="footer-links">
                    <a href="" className="footer-link">Amazon Business Card</a>
                    <a href="" className="footer-link">Shop with Points</a>
                    <a href="" className="footer-link">Reload Your Balance</a>
                    <a href="" className="footer-link">Amazon Currency Converter</a>
                </li>
            </ul>
            <ul  className="list">
                <p><b>Let Us Help You</b></p>
                <li className="footer-links">
                    <a href="" className="footer-link">Amazon and COVID-19</a>
                    <a href="" className="footer-link">Your Account</a>
                    <a href="" className="footer-link">Your Orders</a>
                    <a href="" className="footer-link">Shipping Rates & Policies</a>
                    <a href="" className="footer-link">Returns & Replacementss</a>
                    <a href="" className="footer-link">Manage Your Content and Devices</a>
                    <a href="" className="footer-link">Amazon Assistant</a>
                    <a href="" className="footer-link">Help</a>
                </li>
            </ul>
        </div>

        {/* <!-- Foot-panel-3 --> */}
        <div className="foot-panel3">
            <Divider />
            <div className="bottom-logo">
               <NavLink to='/'> <img src="Images/footer-logo.png" className="bottom-logo-img" alt="" /></NavLink>
            </div>           
        </div>

        {/* <!-- foot-panel-4 --> */}
        <div className="foot-panel4">
            <div className="pages">
                <a href="" className="page-link">Conditions of Use</a>
                <a href="" className="page-link">Privacy Notice</a>
                <a href="" className="page-link">Consumer Health Data Privacy Disclosure</a>
                <a href="" className="page-link">Your Ads Privacy Choices</a>
            </div>
            <div className="copyright">
                © 1996-2024, Amazon.com, Inc. or its affiliates
            </div>
        </div>
    </footer>
  )
}

export default footer
