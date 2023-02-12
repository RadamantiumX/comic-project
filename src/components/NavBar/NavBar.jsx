import React, { useState } from "react";
import { AppBar } from "@mui/material";
import './NavBar.css';
import Logo from '../../assets/img/logo.png';

function NavBar(){
    const [navBarScroll, setNavBarScroll] = useState(false);
    
    const handleBgNavBar = ()=>{
        if (window.scrollY >= 70){
            setNavBarScroll(true);
        }else{
            setNavBarScroll(false);
        }
    }
    window.addEventListener("scroll",handleBgNavBar);

    return(
        <div className="menu-content">
            <a href="" className="logo"><img src={Logo} className="logo-img"/></a>
            <nav className="menu-nav">         
             <a href="">Acerca de</a>
             <a href="">Eventos</a>
             <a href="">Galeria</a>
             <a href="">Extras</a>
           </nav>
        </div>
        
    )
}
export default NavBar;