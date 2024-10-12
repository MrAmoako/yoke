import React from 'react'
import './style.scss'

export const Login = () => {
  return (
    <div className='formContainer'>
    <div className="hero"></div>
     <div className='formWrapper'>
        <span className="Logo">Yoke Chat</span>
        <span className="title">Login</span>
     <form>
        <input type='email' placeholder='Email'/>
        <input type='password' placeholder='Password'/>
        <input style={{display: 'none'}} type='file' id='file'/>
        <p>Need an account? Register</p>
        <button>Sign In</button>
     </form>
    </div>    
    </div>
  )
}
