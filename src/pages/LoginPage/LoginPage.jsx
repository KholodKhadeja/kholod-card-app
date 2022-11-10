import React from 'react';
import "./LoginPage.scss";
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const [userLoginInfo, setuserLoginInfo]=useState({
    email:"",
    password:"",
  });

  const onChangeInputs = (ev)=>{
    let userInfo=JSON.parse(JSON.stringify(userLoginInfo));
    if(userInfo.hasOwnProperty(ev.target.id)){
      userInfo[ev.target.id]=ev.target.value;
       setuserLoginInfo(userInfo);
    }
  } 
    const handleLoginFormSubmition=(ev)=>{
            ev.preventDefault();
            axios.post("/users/login", userLoginInfo)
            .then((res)=>{
              toast.success('Logged in successfully!', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                localStorage.setItem("token",res.data.token);
            }).catch((err)=>{
              let errorMsg;
              if(err.response.data==="Invalid email or password."){
               errorMsg="You NEED to RIGSTER!";
               }
               else{
                errorMsg=err.response.data;
               }
              toast.error(`${errorMsg}`, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            })
    }
    
    return (
      <div className="backgroundDiv">
          <div className="loginPageDiv">
             <h1 className='titleText'>Login</h1>
             <form onSubmit={handleLoginFormSubmition} className="signForm"> 
                <div className="mb-3">
             <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
             <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={userLoginInfo.email}
               onChange={onChangeInputs}/>
             <div id="emailHelp" className="form-text"></div>
             </div>
             <div className="mb-3">
             <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
             <input type="password" className="form-control" id="password" value={userLoginInfo.password}  
             onChange={onChangeInputs}/>
             </div>
             <button type="submit" className="btn btn-primary signInBtn">Sign-In</button>
             </form>
           </div>
    </div>
    );
}

export default LoginPage;
