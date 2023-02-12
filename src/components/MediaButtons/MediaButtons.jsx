import React from "react";
import Facebook  from '../../assets/icons/facebook.png';
import Instagram  from '../../assets/icons/instagram.png';
import Twitter  from '../../assets/icons/twitter.png';
import Linkedin from '../../assets/icons/linkedin.png';
import './MediaButtons.css';

function MediaButtons() {

    return(
        <div>
            
            <ul className="ul">
  <li className="li">
    <a className="facebook" href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <img src={Facebook} className="fa fa-facebook" aria-hidden="true"/>
    </a>
  </li>
  <li className="li">
    <a className="twitter" href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <img src={Instagram} className="fa fa-twitter" aria-hidden="true"/>
    </a>
  </li>
  <li className="li">
    <a className="instagram" href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <img src={Twitter} className="fa fa-instagram" aria-hidden="true"/>
    </a>
  </li>
  <li className="li">
    <a className="google" href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <img src={Linkedin} className="fa fa-google-plus" aria-hidden="true"/>
    </a>
  </li>
</ul>
        </div>

    )
    
}
export default MediaButtons;