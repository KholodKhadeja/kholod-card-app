import React from 'react';
import "./RegisterPage.scss";
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import loginSchema from 'validation/login.validation';
import Joi from 'joi-browser';
import { useHistory } from 'react-router-dom';

const RegisterPage = () => {
  const history=useHistory();
  const [userRegisterDetails, setUserRegisterDetails]=useState({
    name:"",
    email:"",
    password:"",
  });

  const onChangeUserRegisterDetails=(ev)=>{
    let userInfo=JSON.parse(JSON.stringify(userRegisterDetails));
    if(userInfo.hasOwnProperty(ev.target.id)){
      userInfo[ev.target.id]=ev.target.value;
      setUserRegisterDetails(userInfo);
    }
  }

const handleRegisterFormSubmition = ()=>{
  const validateValue=Joi.validate(userRegisterDetails, loginSchema);
  if(validateValue.error){
      toast.error(`${validateValue.error}`, {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  }
 else{
  axios.post("/users/register",{
    name:userRegisterDetails.name,
    email:userRegisterDetails.email,
    password:userRegisterDetails.password,
  }).then((res)=>{
    toast.success('Registered successfully!', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      history.push("/login");
  }).catch((err)=>{
    let errMsg;
    if(err.message === "Request failed with status code 400"){
        errMsg=err.request.response;
    }
    if(err.message === "Network Error"){
         errMsg= err.message;
    }
    toast.error(`${errMsg}`, {
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
};

 return (
        <div className="backgroundDiv">
        <div className="registerPageDiv">
           <h1 className='titleText'>Register</h1>
           <div  className="signForm"> 
           <div className="mb-3">
           <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
           <input type="text" className="form-control" id="name" value={userRegisterDetails.name} 
           aria-describedby="emailHelp" onChange={onChangeUserRegisterDetails}/>
           <div id="emailHelp" className="form-text"></div>
           </div>
             
              <div className="mb-3">
           <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
           <input type="email" className="form-control" id="email" value={userRegisterDetails.email} 
           aria-describedby="emailHelp" onChange={onChangeUserRegisterDetails}/>
           <div id="emailHelp" className="form-text"></div>
           </div>
           <div className="mb-3">
           <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
           <input type="password" className="form-control" id="password" value={userRegisterDetails.password} 
           onChange={onChangeUserRegisterDetails}/>
           </div>
           <button className="btn btn-primary signInBtn" onClick={handleRegisterFormSubmition}>
            Register</button>
           </div>
         </div>
  </div>
    );
}

export default RegisterPage;
