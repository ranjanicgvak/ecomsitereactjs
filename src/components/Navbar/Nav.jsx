import React from 'react';

import {
Nav,
NavLink,
Bars,
NavMenu
} from './NavbarElements';
 import Homeimage from '../../assets/images/Home-1.jpg';

const Navbar = () => {
  return (
    <>
   
			<div id="main-header" className="main-header ms-br-bt">

			<div className="col-sm-12 col-md-12 ms-h-60 text-center">
								<div className="ms-pt-xs ms-pb-xs">
									<a href="/" className="logoText">
										acecraft
										{/* <img
									className="ms-mh-70 ms-dis-ib img-responsive hidden"
									ms-data-valign="middle"
									src={logo}
									title="ACECRAFT"
									alt="ACECRAFT"
								/> */}
								</a>
								</div>
						
			</div>
	<Nav>
		<Bars />

		<NavMenu>
			
		<NavLink to="/school" activeclassname="active">
			SCHOOL
		</NavLink>
		<NavLink to='/college'>
			COLLEGE
		</NavLink>
		<NavLink to='/enterprise'>
			ENTERPRISE	
		</NavLink>
		<NavLink to='/notes' >
			NOTES
		</NavLink>
		<NavLink to='/airenmask' >
		AIREN MASK
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
		
	</>
);
}

export default Navbar;
