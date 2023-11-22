import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

function Home() {
  const user=useSelector(selectUser)
  return (
      <>
          <Layout />
          <div className='main-wrapper'style={{ backgroundImage: `url(${background})`, backgroundSize:`1400px` }}>
              <div className='welcome-container'>
                  <h1> Welcome <span className=' username-color'>{user.username} </span> ! </h1>
              </div>

          </div>
      </>
  )
}

export default Home