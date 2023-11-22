import React from 'react'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import "./REgister.css"
import axios from 'axios'
function Register() { 
  const navigate = useNavigate()
  // const [formdata, setFormdata] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   role:"CUSTOMER"
  // })

  const handleSubmit = (e)=>{
    e.preventDefault();

    const formData = new FormData(e.target)

    const data = {
        name: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password'),
        role:"CUSTOMER"
    }

    try {
      console.log(formData);
      const res = axios.post("http://localhost:8080/api/v1/auth/register", data)
    } catch (error) {
      console.log(error);
    }
    navigate('/')
  }


  return (
    <>
      <div className='auth-container'>
        <div className='auth-wrapper'>
          <form className='auth-form app-x-shadow' onSubmit={handleSubmit} style={{paddingTop:"30px"}}>
            <h1 className='auth-heading'>Registration Form</h1>
            <input type="text" name="username" id="name" placeholder='username' className='auth-field' required />
            <input type="email" name="email" id="email"  placeholder='email' className='auth-field' required />
            <input type="password" name="password" id="password"  placeholder='password' className='auth-field' required />
            <button type='submit' className='auth-btn app-x-shadow'> Register </button>
            <Link to='/' className='auth-links' >Login</Link>
          </form>

        </div>
      </div>

    </>
  )
}

export default Register