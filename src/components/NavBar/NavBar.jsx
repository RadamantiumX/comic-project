import React, { useState } from "react";
import { AppBar } from "@mui/material";
import './NavBar.css';
import Logo from '../../assets/img/dt.png'


function NavBar(){
    const [navBarScroll, setNavBarScroll] = useState(true);
    
    const handleBgNavBar = ()=>{
        if (window.scrollY >= 50){
            setNavBarScroll(true);
        }else{
            setNavBarScroll(false);
        }
    };
   
   window.addEventListener("scroll",handleBgNavBar);

    return(
        <AppBar
        className="menu-content"
        sx={
            navBarScroll
              ? {
                  backgroundColor: "#000",
                  transition: "0.3s",
                  width: "100%",
                }
              : {
                  backgroundColor: "#000" ? "transparent" : "#000",
                  boxShadow: 0,
                  transition: "0.3s",
                  width: "100%",
                }
          }
         
        >
       
            <a href="" className="logo"><img src={Logo} alt="Logo-DT"/></a>
            <nav className="menu-nav">         
             <a href="">Acerca de</a>
             <a href="">Eventos</a>
             <a href="">Galeria</a>
             <a href="">Extras</a>
            </nav>
       
        </AppBar>
    )
}
export default NavBar;