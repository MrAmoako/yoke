import React from 'react'
import './style.scss'
export const Register = () => {
  return (
    <div className='formContainer'>
     <div className='formWrapper'>
        <span className="Logo">YOKE</span><br></br>
        <span className="title">Register</span>
     <form>
        <input type='text' placeholder='Display name'/>
        <input type='email' placeholder='Email'/>
        <input type='password' placeholder='Password'/>
        <input type='file'/>
        <button>Sign Up</button>
     </form>
    </div>    
    </div>
  )
}
