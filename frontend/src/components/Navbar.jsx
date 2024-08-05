import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../main';
import axios from 'axios';
import { toast } from 'react-toastify';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const [show,setShow]=useState(false);
    const {isAuthenticated,setIsAuthenticated}=useContext(Context);

    const navigateTo=useNavigate();


    const handleLogout=async()=>{
            await axios
            .get("https://hms-management-backend.onrender.com/api/v1/user/patient/logout",{
                withCredentials:true,
        }).then((res)=>{
            toast.success(res.data.message);
            setIsAuthenticated(false);
        })
        .catch((err)=>{
            toast.error(err.response.data.message);
        })
       
    };


    const gotoLogin=()=>{
        navigateTo("/login");
    };


  return (
    <nav className="container">
        <div className="logo">
        <img src="/logo.png" alt="logo" className="logo-img" />

        </div>
            <div className={show ? "navLinks showmenu":"navLinks"}>
                <div className="links">
                    <Link to={"/"} onClick={()=>setShow(!show)} >HOME </Link>
                    <Link to={"/appointment"} onClick={()=>setShow(!show)}>APPOINTMENT </Link>
                    <Link to={"/about"} onClick={()=>setShow(!show)} >ABOUT US </Link>
                </div>
                {
                isAuthenticated ? 
                (<button className="logoutBtn btn" onClick={handleLogout} style={{cursor:"pointer"}}>LOGOUT</button>):
                (<button className="loginBtn btn" onClick={gotoLogin} style={{cursor:"pointer"}} >LOGIN</button>)
                }

        </div>
        <div className="hamburger" onClick={()=>setShow(!show)}>
            <GiHamburgerMenu/>
        </div>
    </nav>
  )
}

export default Navbar
