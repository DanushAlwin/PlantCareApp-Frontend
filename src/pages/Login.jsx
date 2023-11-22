import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import axios from "axios"
import logo from "../components/Logo.png";
import './Login.css';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const [loginMode, setLoginMode] = useState('user'); // Default to 'user' mode

  const handleLoginModeChange = (e) => {
    setLoginMode(e.target.value);
  };

  const submitHandler = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email: formData.get('username'),
        password: formData.get('password')
      });
      
      const user = response.data;
      console.log(user.token)
      localStorage.setItem('token', user.token)

      console.log(user.role)
      
      if (user) {
        dispatch(login({ ...formData, mode: loginMode })); // Include login mode in user details
        if (user.role === 'ADMIN') {
          navigate('/admin'); // Route to the admin page if admin mode is chosen
        } else {
          navigate('/Intro'); // Route to the user dashboard
        }
      }
    } catch (error) {
      console.error('Error adding user:', error);
    }

  };

  return (
    <>
      <div className='auth-container' >
        <div className='auth-wrapper' >
          <form className='auth-form app-x-shadow' onSubmit={submitHandler} style={{height:"500px"}}>
            <h1 className='auth-heading' style={{marginLeft:"120px"}}>Login</h1>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='username'
              className='auth-field'
              required
            />
            <input
              type='password'
              name='password'
              id='password'
              placeholder='password'
              className='auth-field'
              required
            />

            <div className='login-mode'>
              <label>
                <input
                  type='radio'
                  name='loginMode'
                  value='user'
                />
                User
              </label>
              <label>
                <input
                  type='radio'
                  name='loginMode'
                  value='admin'
                />
                Admin
              </label>
            </div>

            <button type='submit' className='auth-btn app-x-shadow'>Login</button>
            <Link to='/Register' className='auth-links' style={{color:"black"}}>
              Register
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
