import React, {useState} from 'react'
import "./Login.css"
import assets from '../../assets/assets.js'

const Login = () => {
  const [currState, setCurrState] = React.useState("Sign up");
  const handleLogin = () => {
    setCurrState("Login");
  }
  const handleSignup = () => {
    setCurrState("Sign up");
  }

  return (
      <div className='login'>
      <img src={assets.logo_big} alt="login" className='logo'/>
      <form className='login-form'>
        <h2>{currState}</h2>
        {currState === "Sign up" && <input className="form-input" type="text" placeholder="Username" name="username" required/>}
        <input className="form-input" type="email" placeholder="Email" name="email" required/>
        <input className="form-input" type="password" placeholder="Password" name="password" />
        {currState === "Login" ? <button type="submit">Login now</button> : <button type="submit">Create an account</button>}
        {currState === "Sign up" ? <div className="login-term">
          <input type="checkbox" name="terms" id="terms" />
          <p>Agree to <a href="#">terms of service & privacy policy</a></p>
        </div> : <div className="login-term">
          <input type="checkbox" name="terms" id="terms" />
          <p>Keep me logged in</p>
        </div>}
        {currState === "Sign up" ? <div className="login-forgot">
            <p className="login-toggle">Already have an account? <span onClick={handleLogin}>Click here</span></p>
        </div> : <div className="login-forgot">
          <p className="login-toggle">Don't have an account? <span onClick={handleSignup}>Click here</span></p>
        </div>}
      </form>      
      </div>
  )
}

export default Login