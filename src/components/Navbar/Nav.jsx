import React from 'react';

import {
	Nav,
	NavLink,
	Bars,
	NavMenu
} from './NavbarElements';
import NavDropdown from 'react-bootstrap/NavDropdown';
import settingsImage from '../../assets/images/setting.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { fakeAuth } from "../../pages/user/fakeAuth";
import { useNavigate } from "react-router-dom";




const Navbar = () => {
	const navigate = useNavigate();


	const handleLogout = () => {
		fakeAuth.logout(() => {
			navigate('/signin');
		});
	};
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
						{/* <NavDropdown title="Dropdown1" id="basic-nav-dropdown" style={{marginLeft: '200px'}}> */}
						<NavDropdown title={<span><img src={settingsImage} alt="Settings" width="20" /></span>} style={{ marginLeft: '300px' }} id="basic-nav-dropdown">
						<NavDropdown.Item as={Link} to="/orderstatus">Order Status</NavDropdown.Item>
						<NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item>
						{fakeAuth.isAuthenticated ? (
							<>
							<NavDropdown.Item as={Link} to="/profile">Account</NavDropdown.Item>
							<NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
							</>
						) : (
							<>
							<NavDropdown.Item as={Link} to="/signin">Sign In</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/register">Register</NavDropdown.Item>
							</>
						)}
						</NavDropdown>
						<div className="cartDetails">
							<a title="0" data-ng-href="/cart" href="/cart">
								<div className="my-cart">
									<FontAwesomeIcon icon={faShoppingCart} style={{ color: 'white' }} />
									{/* <span className="cart badge badge-cart ng-binding">0</span> */}
								</div>
							</a>
						</div>

						
					</NavMenu>

				</Nav>
			</div>

		</>
	);
}

export default Navbar;
