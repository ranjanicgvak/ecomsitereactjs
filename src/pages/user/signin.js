import React, { useState } from 'react';
import axios from 'axios';
import '../../assets/css/signin.css';
import Layout from '../../components/Navbar/Layout';
import { useNavigate, useLocation } from "react-router-dom";
import { fakeAuth } from "./fakeAuth";



const SignIn = () => {
  const navigate = useNavigate();
  let location = useLocation();
  console.log({ location });

  let { from } = location.state || { from: { pathname: "/" } };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:3030/users');
      const users = response.data;

      const user = users.find((u) => u.email === username && u.password === password);
      //console.log(user);
      if (user) {
        // Login successful
        fakeAuth.login(() => {
          navigate(from);
        console.log('Login successful');
        });
        
        // Perform necessary actions (e.g., store authentication token, redirect)
      } else {
        // Invalid credentials
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred during login');
    }
  };
    return (
      <Layout>
         <div className='signincontainer'>
         <div className="wrapper ms-mt-35x ms-mb-35x ms-pt-x ms-pb-x text-center">
                        <div className="col-lg-4 col-lg-offset-4 col-md-offset-3 col-md-6 col-xs-12">
                            <div className="login-box user-box">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group" > 
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="form-group" >
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <div>{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
    </div>
    </div>
        </Layout>
    )
}
export default SignIn;