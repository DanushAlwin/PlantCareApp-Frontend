import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'



function Topbar() {
const user=useSelector(selectUser)

    return (
        <>
            <div className='topbar'style={{ zIndex:`2` }}>
                <div className="logo"> <h1 className="logo" style={{fontFamily: 'Courier New'}}>&nbsp; Plantify</h1></div>
                <h1 className='user username-color' style={{ zIndex:`1` }}>{user ? user.username : 'Guest'}</h1>
                <div className="elements">
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/weather">How's the weather?</a></li>
                        
                    </ul>
                        <div className="dropdown">
                          <button className="dropbtn">Profile</button>
                            <div className="dropdown-content">
                                <a href="/">History</a>
                                <a href="/">Logout</a>
                           </div>
                      </div>
                </div>
            </div>
        </>
    )
}

export default Topbar