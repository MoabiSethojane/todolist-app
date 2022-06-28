import React from 'react'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import {Link } from 'react-router-dom'
import{createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase';
const SignUp = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
let history = useHistory();
const Register = ()=>{
   
    createUserWithEmailAndPassword(auth, email, password).then(()=>{
        history.push("/Home")
    }).catch((error)=>{
        console.log(error);
    })
}
  return (
    <div>
    <h1>Creat Account</h1>

    <input type="email" placeholder='example@gamil.com' onChange={(e)=>setEmail(e.target.value)}></input><br></br>
    <input type="password" placeholder='Create Password' onChange={(e)=>setPassword(e.target.value)}></input><br></br>
    <button onClick={Register}>Sign Up</button>
    </div>
  );
}

export default SignUp