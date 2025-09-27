import './Login.css'
import React, { useState } from 'react'
import backgroun_bnr from "../../assets/assets/background_banner.jpg"
import logo from "../../assets/assets/logo.png"
function Login() {
  const [state,setstate]=useState('Sign in ')
  return (
    <>
    <div className='loginc'>
      <img className='back-cover' src={backgroun_bnr} alt="back-cover" />
      <img className='llogo' src={logo} alt="netflix" />
      <form className='form' action="#" method='#' >
        <h2 className='state'>{state}</h2>
        {state==='Sign up'? <input className='name' type="text" placeholder='Your Name' />:""}
        <input className='email' type="text" placeholder='Email'/>
        <input className='password' type="pasword" placeholder='Password' />
        {state=== "Sign in"?<a   className='fpasw' href="#">Forget Password</a>:""}
        <label className='sibtnl' htmlFor="sbtn">
           {state}
          <input id="sbtn" onClick={()=>{console.log("sign in")}} type="button" value='Sign In' />
          </label>
          <div className='nstate'>
          <h3>{state==='Sign in'?"New to Netflix":"Already have account"}</h3>
          <label className='subtn' htmlFor="subtn">
            {state === 'Sign in'?"Sign up":"Sign in"}
          <input id="subtn" onClick={()=>{state=='Sign in'?setstate("Sign up"):setstate('Sign in')}} type="button"  />
          </label>
        </div>
      </form>
    </div>
    </>
  )
}

export default Login
