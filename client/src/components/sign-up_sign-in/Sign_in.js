/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router';
import './Sign_in.css';
import { Logincontext } from "../Context/ContextProvider";
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sign_in = () => {
  const [logData, setData] = useState({
    email:'',
    password : ''
  });
// console.log(logData);

const history = useNavigate("");

 const { account, setAccount } = useContext(Logincontext);

  const addData = (e)=>{
    const {name,value} = e.target;
    setData(()=>{
      return{
        ...logData,
        [name]:value
      }
    })
  }

  const sendData = async(e)=>{
    e.preventDefault();
    const {email,password} = logData;
    
    try {
      const res = await fetch("/signin", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              email, password
          })
      });

      const data = await res.json();
      // console.log(data);

      if (res.status === 400 || !data) {
          console.log("invalid details");
          toast.error("Invalid Details 👎!", {
              position: "top-center"
          });
      } else {
          
          setData({ ...logData, email: "", password: "" })
          toast.success("Login Successfully done 😃!", {
              position: "top-center"
          });
          setAccount(data);
          history("/");
      }
  } catch (error) {
      console.log("login page ka error" + error.message);
  }
}

  return (
    <div className='sign-in-page'>
      <div className="header-logo">
          <NavLink to='/'><img src="Images/amazon-logo-black.jpg" className='black-logo' alt="" /></NavLink>
      </div>
      <form className='sign-in-form'>
          <p className='form-heading'>Sign in</p>
          <p className='sub-heading'><b>Email</b></p>
          <input type="text" name='email' id='email' onChange={addData} value={logData.email}/>
          <p className='sub-heading'><b>Password</b></p>
          <input type="password" name='password' id='password' onChange={addData} value={logData.password}/>
          <button className='sign-in-btn' onClick={sendData} >Sign in</button>
          <p className='sign-in-info'>By creating an account, you agree to Amazon's</p>
          <div className="sign-in-conditions">
            <a href="" className='condition-link'>Conditions of Use</a>
            <p>&nbsp;and&nbsp;</p>
            <a href="" className='condition-link'>Privacy Notice.</a>
          </div>
          <hr/>
          <div className="sign-in-work">
            <p className='sub-heading'><b>Buying for work?</b></p>
            <a href="" className='amazon-business'>Shop on Amazon Business</a>
          </div>
        </form>
        <ToastContainer />
        <div className='new-customer'>
          <p className='heading'>New to Amazon?</p>
          <NavLink to='/register'><button className='new-account-btn'>Create your Amazon account</button></NavLink>
        </div>
        <div className="sign-in-footer">
          <hr />
          <div className="footer-links">
            <a href="" className="link">Conditions of Use</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="" className="link">Privacy Notice</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="" className="link">Help</a>
          </div>
          <p className='copyright'>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div> 
  
    </div>
  )
}

export default Sign_in