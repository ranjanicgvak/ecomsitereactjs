import React from 'react';
import Navbar from './Nav';
import Footer from './footernav';
import '../../assets/css/nav.css';


const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
