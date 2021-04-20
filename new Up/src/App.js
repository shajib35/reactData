import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import Axios from 'axios';
import './App.css';

function App() {

  const [usernameReg, setUsernameReg]=useState('')
  const[passwordReg, setPasswordReg]=useState('')

  const [username, setUsername]=useState('')
  const[password, setPassword]=useState('')
const [loginStatus,setLoginStatus]= useState('');

  const register=()=>{
    Axios.post('http://localhost:3001/register',{

      username:usernameReg,
      password:passwordReg,
    }).then((response)=>{
 console.log(response);

     
    });
  };


  const login=()=>{
    Axios.post('http://localhost:3001/login',{
      username:username,
      password:password,
    }).then((response)=>{
      if(response.data.message){
        setLoginStatus(response.data.message)
      }else{
        setLoginStatus(response.data[0].username)
      }
 
    });
  };

  return (
    <div className="App">
    <div className="registration">
  
        <h1>Registration</h1>
        <lable>Username</lable>
        <input type="text" onChange={(e) =>{
          setUsernameReg(e.target.value);
        }}></input>
        <lable>Password</lable>
        <input type="text" onChange={(e) =>{
          setPasswordReg(e.target.value);
        }}></input>
        <button onClick={register}>Register</button>

    </div>






    <div className="Login">
  
        <h1>login</h1>
        
        <input type="text" placeholder="Username"  onChange={(e) =>{
         setUsername(e.target.value);
        }}></input>
      
        <input type="text" placeholder="Password"  onChange={(e) =>{
         setPassword(e.target.value);
        }} ></input>
        <button onClick={login}>Login</button>

    </div>

      <h1>{loginStatus}</h1>
    </div>
  );
}

export default App;
