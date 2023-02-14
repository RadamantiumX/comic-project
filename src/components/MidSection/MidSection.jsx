import React from "react";
import Mid from '../../assets/img/mid.jpg';
import './MidSection.css';

function MidSection() {

    return(
        <div className="mid-section">
            <div className="contenedor">
              <img src={Mid} alt="Mid-Image" className="img-mid"/>
           </div>
        </div>
        
    )
    
}
export default MidSection;