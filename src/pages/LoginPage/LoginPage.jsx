import React from 'react';
import "./LoginPage.scss";
import { useState } from 'react';

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
            
    }
    return (
      <div className="backgroundDiv">
          <div className="loginPageDiv">
             <h1 className='titleText'>Login</h1>
             <form onSubmit={handleLoginFormSubmition} className="signForm"> 
                <div class="mb-3">
             <label htmlFor="exampleInputEmail1" class="form-label">Email</label>
             <input type="email" class="form-control" id="email" aria-describedby="emailHelp" value={userLoginInfo.email}
               onChange={onChangeInputs}/>
             <div id="emailHelp" class="form-text"></div>
             </div>
             <div class="mb-3">
             <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
             <input type="password" class="form-control" id="password" value={userLoginInfo.password}  
             onChange={onChangeInputs}/>
             </div>
             <button type="submit" class="btn btn-primary signInBtn">Sign-In</button>
             </form>
           </div>
    </div>
    );
}

export default LoginPage;
