import React from 'react';
import "./RegisterForBusiness.scss";
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import loginSchema from 'validation/login.validation';
import Joi from 'joi-browser';
import { useHistory } from 'react-router-dom';
import useAutoLogin from 'hooks/useAutoLogin';
import { useRef } from 'react';


const RegisterForBusiness = () => {
  const autoLoginFunction = useAutoLogin();
  const history=useHistory();
   const [userRegisterInfo, setuserRegisterInfo]=useState({
      name:"",
      email:"",
      password:"",
    });
    const [loginInfo, setLoginInfo]= useState({
      email:"",
      password:"",
    });
  const [bizCardInfo, setBizCardInfo]=useState({
    title:"",
    subTitle:"",
    description:"",
    address:"",
    phone:"",
    url:"",
  });

    const onChangeRInputs = (ev)=>{
      let userInfo=JSON.parse(JSON.stringify(userRegisterInfo));
      // let [userEmail,userPassword] = [userRegisterInfo.email, userRegisterInfo.password];
      if(userInfo.hasOwnProperty(ev.target.id)){
        userInfo[ev.target.id]=ev.target.value;
        setuserRegisterInfo(userInfo);
        // setLoginInfo(userEmail, userPassword);
      }
    } 

    const onChangeCardInputs = (ev)=>{
      let cardsInfo=JSON.parse(JSON.stringify(bizCardInfo));
      if(cardsInfo.hasOwnProperty(ev.target.id)){
         cardsInfo[ev.target.id]=ev.target.value;
         setBizCardInfo(cardsInfo);
      }
    } 
 const registerBizUser=()=>{
  const validateValue=Joi.validate(userRegisterInfo, loginSchema);
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

  axios.post("/users/register",{
    name:userRegisterInfo.name,
    email:userRegisterInfo.email,
    password:userRegisterInfo.password,
    biz:true,
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
  //  *******************************
  axios.post("/users/login", {
    email: userRegisterInfo.email,
    password: userRegisterInfo.password,
  })
  .then((res)=>{
    localStorage.setItem("token",res.data.token);
    autoLoginFunction(res.data.token);
    history.push("/registerb2");
  }).catch((err)=>
  {
         // toast.error(`${err.request.response}`, {
    //   position: "bottom-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "dark",
    //   });
  });
  history.push("/registerbcard");
  //  ****************************
  }).catch((err)=>{
    // toast.error(`${err.request.response}`, {
    //   position: "bottom-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "dark",
    //   });
  })
}

return (
<div className="backgroundbDiv">
<div className="registerbPageDiv">
    <h1 className='titleText'>Register For Busnisses</h1>
      {/* first slider */}
      <div className="regsterbForm"> 
           <div className="mb-3">
           <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
           <input type="text" className="form-control" id="name" value={userRegisterInfo.name} onChange={onChangeRInputs} aria-describedby="emailHelp" />
           <div id="emailHelp" className="form-text"></div>
           </div>
             
            <div className="mb-3">
           <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
           <input type="email" className="form-control" id="email"  value={userRegisterInfo.email} 
           onChange={onChangeRInputs} aria-describedby="emailHelp" />
           <div id="emailHelp" className="form-text"></div>
           </div>
           <div className="mb-3">
           <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
           <input type="password" className="form-control" id="password" value={userRegisterInfo.password} 
           onChange={onChangeRInputs}/>
           </div>
           <button  className="btn btn-primary signInBtn" onClick={registerBizUser}>Next</button>
           <br/>
           </div>
  </div>
</div>
  );
}

export default RegisterForBusiness;
