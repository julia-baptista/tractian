import React from "react";
import linkedin from "../img/linkedin.png";
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import youtube from "../img/youtube.png";


function Footer() {
  return ( 
    <div className="footer">
      <div className="container center-items-vertical">
        <div>
          <p>CONECTE-SE COM A TRACTIAN</p>
          <div className="center-items">
            <span className="logo"><img src={linkedin} alt="linkedin"  height="35"/></span>
            <span className="logo"><img src={facebook} alt="facebook"  height="35"/></span>
            <span className="logo"><img src={instagram} alt="instagram"  height="35"/></span>
            <span className="logo"><img src={youtube} alt="youtube"  height="40"/></span>
          </div>
        </div>
      </div>
    </div>
   );
}

export default Footer;