import "./LoginPage.scss";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from "store/auth";
import axios from 'axios';
import { toast } from 'react-toastify';
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import useAutoLogin from "hooks/useAutoLogin";

const LoginPage = () => {
  const dispatch= useDispatch();
  const history = useHistory();
  const [userLoginInfo, setuserLoginInfo]=useState({
    email:"",
    password:"",
  });
  const autoLoginFunction = useAutoLogin();
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
              localStorage.setItem("token",res.data.token);
              autoLoginFunction(res.data.token);
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
               history.push("/");
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
    
    return (
      <div className="backgroundDiv">
          <div className="loginPageDiv">
             <h1 className='titleText'>Login</h1>
             <form onSubmit={handleLoginFormSubmition} className="signForm"> 
                <div className="mb-3">
             <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
             <input type="email" className="form-control" id="email" aria-describedby="emailHelp" 
             value={userLoginInfo.email}
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
