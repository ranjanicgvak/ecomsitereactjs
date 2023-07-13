import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './pages/user/authcontext';
import ProtectedRoute from './pages/user/protectedroute';
import Home from './pages/home';
import School from './pages/school';
import Notes from './pages/notes';
import College from './pages/college';
import Enterprise from './pages/enterprise';
import Airenmask from './pages/airenmask';
import SignIn from './pages/user/signin';
import Register from './pages/user/register';
import Contact from './pages/user/contact';
import OrderStatus from './pages/user/orderstatus';
import Profile from './pages/account/profile';

function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/school" element={<School />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/college" element={<College />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/airenmask" element={<Airenmask />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/orderstatus" element={<OrderStatus />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/profile"
          element={
            <AuthProvider>
              <ProtectedRoute path="/" component={Profile} />
            </AuthProvider>
          }
        />

        {/* Protected Route */}
        {/* <AuthProvider> */}
          {/* <ProtectedRoute path="/profile" element={<Profile />} /> */}
        {/* </AuthProvider> */}
      </Routes>
    </div>
    </>
  );
}

export default App;
