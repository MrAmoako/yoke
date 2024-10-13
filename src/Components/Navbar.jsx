import React from 'react'
import pfp from '../Img/hero.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Yoke chat</span>
      <div className="user">
        <img src={pfp} className='' alt="" />
        <span>User</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar