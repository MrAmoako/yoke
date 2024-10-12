import React from 'react'
import './style.scss'
import Pfp from '../Img/pfp-avatar.jpg'
import Hero from '../Img/hero.jpg'
export const Register = () => {
  return (
    <div className='formContainer'>
    <div className="hero">
      <img src={Hero} alt="" />
    </div>
     <div className='formWrapper'>
        <span className="Logo">Yoke Chat</span>
        <span className="title">Register</span>
     <form>
        <input type='text' placeholder='Display name'/>
        <input type='text' placeholder='Username'/>
        <input type='email' placeholder='Email'/>
        <input type='password' placeholder='Password'/>
        <input style={{display: 'none'}} type='file' id='file'/>
        <label htmlFor="file">
          <img src={Pfp}  alt="" />
          <span>Add profile</span>
        </label>
        <p>Already have an account? Sign in</p>
        <button>Sign Up</button>
     </form>
    </div>    
    </div>
  )
}
