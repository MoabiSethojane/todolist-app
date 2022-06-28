import React from 'react'
import {Link} from 'react-router-dom'

const SignIn = () => {
  return (
    <div>
 <h1>Login</h1>
 <input type="email" placeholder='example@gamil.com'></input>
    <input type="password" placeholder='Enter Password'></input>
    <button>Login</button>
    <Link to= '/sign-up'>Create Account?</Link>
   
    </div>

  )
}

export default SignIn