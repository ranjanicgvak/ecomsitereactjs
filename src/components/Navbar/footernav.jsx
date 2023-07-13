import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
    } from './NavbarElements';
    
// import { Nav } from "react-bootstrap";
// import { Navbar } from "react-bootstrap";
// import {
//   faInstagram,
//   faFacebook,
//   faTwitter
// } from "@fortawesome/free-brands-svg-icons";

// // import "./Footer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer" id="footer">
    <div className="container footer-container text-center">
                <div class="row">
                    <div class="socialLinks text-center">
                        <a class="fb" href="https://www.facebook.com/Acecraft-2420817978140298/">
                            <img src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/FB.png" alt="test" className="" height="50px" />
                        </a>
                        <a class="insta" href="https://www.instagram.com/acecraft.in/">
                            <img src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/Insta.png" alt="test1" className="" height="50px" />
                        </a>
                        <a class="linked" href="https://www.linkedin.com/in/acecraft-clothing-4b451445/">
                            <img src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/Lnkdin.png" alt="test1" className="" height="50px" />
                        </a>
                    </div>
                    <Nav>
		<Bars />

		<NavMenu>
			
		<NavLink to="/about" activeclassname="active">
            ABOUT
		</NavLink>
		<NavLink to='/care'>
			CARE
		</NavLink>
		<NavLink to='/returns'>
			RETURNS	
		</NavLink>
		<NavLink to='/production' >
			PRODUCTION
		</NavLink>
		<NavLink to='/terms' >
            TERMS
		</NavLink>
        <NavLink to='/gethelp' >
            GET HELP
		</NavLink>
	
		{/* Second Nav */}
		
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		{/* <div className="userdetails">
		<span><img src="http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/setting.png" alt="cart" className="img-responsive" width="20" /></span>
		<div className="cartDetails">
            <a title="0" data-ng-href="/cart" href="/cart">
                <div className="my-cart">
                <i className="fa fa-shopping-cart" style={{color: 'white'}}> </i>
                <span className="cart badge badge-cart ng-binding">
                0
                </span>
                 </div>
            </a>
        </div>
		</div> */}
		</NavMenu>
		
	</Nav>
                </div> 
    </div>            
    </div>    
    
  );
};

export default Footer;
