import React from 'react'
import "./Leftheader.css";

import Avatar from '@mui/material/Avatar';
// import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import { useContext} from 'react';
import { Divider } from '@mui/material';
import { Logincontext } from '../Context/ContextProvider';
import LogoutIcon from '@mui/icons-material/Logout';
// import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Leftheader = ({logClose, logOut}) => {

  const { account, setAccount } = useContext(Logincontext);

  return (
    <>
        <div className="leftheader">
            <div className="left_nav">
                {
                    account ?
                        <Avatar className="avtar2">{account.fname[0].toUpperCase()}</Avatar> :
                        <Avatar className="avtar" />
                }
                {account ? <h3 className="hello">Hello, {account.fname.toUpperCase()}</h3> : <h3 className="hello">Hello, sign in</h3>}
            </div>
            <div className="nav_btn" onClick={()=>logClose()}> 
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">Shop By Category</NavLink>
                <Divider style={{ width: "100%", marginLeft: -20 }} />
                <NavLink to="/" style={{ marginTop: 18 }}>Today's Deal</NavLink>
                {
                    account ? <NavLink to="/cart">Your Order</NavLink> : <NavLink to="/signin">Your Order</NavLink>
                }
                <Divider style={{ width: "100%", marginLeft: -20 }} />
                <NavLink to="/" style={{ marginTop: 18 }}>Settings</NavLink>
                {
                    account ?
                        <div className="flag">
                            <LogoutIcon style={{ fontSize: 18, marginRight: 4,fontWeight: 700 }} />
                            <h3 onClick={logOut} style={{ cursor: "pointer", fontWeight: 700 }}>Sign Out</h3>
                        </div>
                        : 
                        <NavLink to="/signin">Sign in</NavLink>
                }
                {/* <div className="close_btn">
                    <CloseOutlinedIcon onClick={logClose}/>
                </div>   */}
            </div>    
    </div>
    </>
)
}

export default Leftheader;