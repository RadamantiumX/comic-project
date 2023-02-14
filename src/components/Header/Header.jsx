import React from "react";
import './Header.css';
import MediaButtons from "../MediaButtons/MediaButtons";



function Header (){

    return(
       <div className="header" id="start">
        <MediaButtons/>

       
       
           <div className="contenedor head">
            <h1 className="titulo-principal">Web Page comic</h1>
             <div class="wrap">
                <button class="button">Contacto</button>
             </div>
           </div>
       </div>
    )
}
export default Header;