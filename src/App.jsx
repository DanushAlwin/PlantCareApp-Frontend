import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Settings from './pages/Settings'
import Home from './pages/Home'
import Intro from './pages/Intro'
import Admin from './pages/Admin'
import Remainders from './pages/Remainders'


function App() {
  return (
   <>
   <Routes>
    <Route exact path='/home' element={<Home/>}/>
    <Route exact path='/' element={<Login/>}/>
    <Route exact path='/Register' element={<Register/>}/>
    <Route exact path='/Dashboard'element={<Dashboard/>} />
    <Route exact path='/Users' element={<Users/>}/>
    <Route exact path='/Settings' element={<Settings/>}/>
    <Route exact path='/admin' element={<Admin/>}/>
    <Route exact path='/Intro' element={<Intro/>}/>
    <Route exact path='/Remainders' element={<Remainders/>}/>

 

   </Routes>
   </>
  )
}

export default App