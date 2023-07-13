
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';
import { useNavigate } from 'react-router-dom';

import Layout from '../../components/Navbar/Layout';
import { fakeAuth } from "../user/fakeAuth";
import '../../assets/css/profile.css'; // Import the custom CSS file

const Profile = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const items = [
    { label: 'Profile', icon: 'pi pi-user' },
    { label: 'Account', icon: 'pi pi-fw pi-cog' },
    { label: 'Order History', icon: 'pi pi-shopping-cart' },
    { label: 'Wallet', icon: 'pi pi-wallet' },
    { label: 'Track Order', icon: 'pi pi-location' },
  ];
  // const logout = () => {
  //   fakeAuth.logout(() => {
  //     navigate('/login', { state: { from: { pathname: '/profile' } } });
  //   });
  // };
  useEffect(() => {
    if (!fakeAuth.isAuthenticated) {
      navigate('/signin');
    }
  }, [navigate]);

  return (
    <Layout>
      <div>
      {fakeAuth.isAuthenticated ? (
        <div>
         <div className="card">
      <Button onClick={() => setActiveIndex(0)} className="p-button-outlined mb-5" label="Activate 1st" />
      <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
      {/* <button onClick={logout}>Log out</button> */}

    </div>
        </div>
      ) : (
        <div>
          {/* Render a message or redirect to a login page */}
          <p style={{ marginTop:'80vh',color:'red'}}>Please log in to access this page.</p>
        </div>
      )}
    </div>
   
    </Layout>
  );
};
  
export default Profile;