/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import './Sign_up.css';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sign_up = () => {


  const[userData, setUserData] = useState({
      fname :'',
      email:'',
      password:'',
      cpassword:'',
  });
  // console.log(userData);
  
  const sendData = async (e) => {
    e.preventDefault();

    const { fname, email, password, cpassword } = userData;
    try {
        const res = await fetch("https://amazon-web-server-6o27.onrender.com/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fname, email, password, cpassword
            })
        });

        const data = await res.json();
        // console.log(data);

        if (res.status === 422 || !data) {
            toast.error("Invalid Details 👎!", {
                position: "top-center"
            });
          }else if(res.status === 422 || password!==cpassword ) {
          toast.error("Password is not matching with confirm password 👎!", {
              position: "top-center"
          });
        }else {
            setUserData({
                ...userData, fname: "", email: "",
                   password: "", cpassword: ""
            });
            toast.success("Registration Successfully done 😃!", {
                position: "top-center"
            });

        }
    } catch (error) {
        console.log("front end ka catch error hai" + error.message);
    }
}

  return (
  <div className='sign-up-page'>
        <div className="header-logo">
            <NavLink to='/'><img src="Images/amazon-logo-black.jpg" className='black-logo' alt="" /></NavLink>
        </div>   
        <form method="POST" className='sign-up-form'>
          <p className='form-heading'>Create account</p>

          <p className='sub-heading'><b>Your name</b></p>
          <input type="text" name='fname' id='fname' 
          onChange={(e)=>setUserData({...userData,fname:e.target.value})} 
          value={userData.fname} 
          placeholder='First and last name'/>

          <p className='sub-heading'><b>Email</b></p>
          <input type="text" name='email' id='email' 
          onChange={(e)=>setUserData({...userData,email:e.target.value})} 
          value={userData.email}/>

          <p className='sub-heading'><b>Password</b></p>
          <input type="password" name='password' id='password' 
          onChange={(e)=>setUserData({...userData,password:e.target.value})} 
          value={userData.password} placeholder='At least 6 characters'/>
          <p className='pass-footer'>Passwords must be at least 6 characters.</p>

          <p className='sub-heading'><b>Re-enter password</b></p>
          <input type="password" name='cpassword' id='cpassword' 
          onChange={(e)=>setUserData({...userData,cpassword:e.target.value})} 
          value={userData.cpassword}/>

          <button onClick={sendData} className='sign-up-continue'>Continue</button>
          <p className='sign-up-info'>By creating an account, you agree to Amazon's</p>
          <div className="sign-up-conditions">
            <a href="" className='condition-link'>Conditions of Use</a>
            <p>&nbsp;and&nbsp;</p>
            <a href="" className='condition-link'>Privacy Notice.</a>
          </div>
          <hr/>
          <div className="sign-up-work">
            <p className='sub-heading'><b>Buying for work?</b></p>
            <a href="" className='work-account-link'>Create a free business account</a>
          </div>
          <hr />
          <p className='already-account'>Already have an account? <NavLink to="/signin" className='sign-in-link'>Sign in</NavLink></p>
        </form>
        <div className="sign-up-footer">
          <hr />
          <div className="footer-links">
            <a href="" className="link">Conditions of Use</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="" className="link">Privacy Notice</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="" className="link">Help</a>
          </div>
          <p className='copyright'>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div> 
        <ToastContainer />
    </div>
  )
}

export default Sign_up
