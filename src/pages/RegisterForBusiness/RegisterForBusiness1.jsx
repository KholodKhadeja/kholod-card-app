import React from 'react';
import "./RegisterForBusiness.scss";
import { useState } from 'react';
import axios from 'axios';

const RegisterForBusiness1 = () => {
   const [userRegisterInfo, setuserRegisterInfo]=useState({
      name:"",
      email:"",
      password:"",
    });
  const [bizCardInfo, setBizCardInfo]=useState({
   bizName:"",
    desc:"",
    address:"",
    phone:"",
   imgUrl:"",
  });

    const onChangeRInputs = (ev)=>{
      let userInfo=JSON.parse(JSON.stringify(userRegisterInfo));
      if(userInfo.hasOwnProperty(ev.target.id)){
        userInfo[ev.target.id]=ev.target.value;
        setuserRegisterInfo(userInfo);
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
  axios.post("/users/register",{
    name:userRegisterInfo.name,
    email:userRegisterInfo.email,
    password:userRegisterInfo.password,
    biz:true,
  }).then((res)=>{
    console.log(res.request.statusText);
  }).catch((err)=>{
    console.log(err.request.response);
  })
}
  const createBizCard=()=>{

 }
 
return (
<div className="backgroundbDiv">
<div className="registerbPageDiv">
    <h1 className='titleText'>Register For Busnisses</h1>
      {/* first slider */}
      <div className="regsterbForm visibleForm"> 
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

        {/* /*the second page*/}
           <div  className="regsterbForm hiddenForm"> 
           <div className="mb-2">
           <label htmlFor="exampleInputEmail1" className="form-label">Busniss Name</label>
           <input type="text" className="form-control" id="bizName" value={bizCardInfo.bizName} 
           onChange={onChangeCardInputs}
           aria-describedby="emailHelp" />
           <div id="emailHelp" className="form-text"></div>
           </div>
             
              <div className="mb-2">
           <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
           <input type="text" className="form-control" id="desc" value={bizCardInfo.desc} aria-describedby="emailHelp" onChange={onChangeCardInputs}/>
           <div id="emailHelp" className="form-text"></div>
           </div>

           <div className="mb-2">
           <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
           <input type="text" className="form-control" id="address" value={bizCardInfo.address} aria-describedby="emailHelp" onChange={onChangeCardInputs} />
           <div id="emailHelp" className="form-text"></div>
           </div>
  
           <div className="mb-2">
           <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
           <input type="tel" className="form-control" id="phone" value={bizCardInfo.phone} aria-describedby="emailHelp" onChange={onChangeCardInputs}/>
           <div id="emailHelp" className="form-text"></div>
           </div>

           <div className="mb-2">
           <label htmlFor="exampleInputEmail1" className="form-label">Image Url</label>
           <input type="url" className="form-control" id="imgUrl" value={bizCardInfo.imgUrl} aria-describedby="emailHelp" onChange={onChangeCardInputs}/>
           <div id="emailHelp" className="form-text"></div>
           </div>

           <button  className="btn btn-primary signInBtn" onClick={createBizCard}>Done</button>
           </div>
  </div>
</div>
  );
}

export default RegisterForBusiness1;