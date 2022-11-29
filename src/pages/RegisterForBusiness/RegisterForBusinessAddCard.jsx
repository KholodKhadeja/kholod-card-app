import { useEffect} from "react";
import { useSelector } from "react-redux";
import "./RegisterForBusiness.scss";
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import loginSchema from 'validation/login.validation';
import Joi from 'joi-browser';
import { useHistory } from 'react-router-dom';
import useAutoLogin from 'hooks/useAutoLogin';
import cardSchema from 'validation/card.validation';
import { authActions } from "store/auth";


const RegisterForBusinessAddCard = () => {
  const autoLoginFunction = useAutoLogin();
  const history=useHistory();
  const [bizCardInfo, setBizCardInfo]=useState({
    title:"",
    subTitle:"",
    description:"",
    address:"",
    phone:"",
    url:"",
  });
  const loggedIn = useSelector((state) => state.auth.loggedInVar);
  const [tryToLogin, setTryToLogin] = useState(true);
  useEffect(() => {
    (async () => {
      let status = await autoLoginFunction(localStorage.getItem("token"));
      if (status === false) {
        setTryToLogin(false); 
      }
    })();
  }, []);
  useEffect(() => {
    if (loggedIn === true && tryToLogin === true) {
      setTryToLogin(false); 
    }
  }, [loggedIn]);

    const onChangeCardInputs = (ev)=>{
      let cardsInfo=JSON.parse(JSON.stringify(bizCardInfo));
      if(cardsInfo.hasOwnProperty(ev.target.id)){
         cardsInfo[ev.target.id]=ev.target.value;
         setBizCardInfo(cardsInfo);
      }
    } 
  
const createBizCard=()=>{
  const validateCardData=Joi.validate(bizCardInfo, cardSchema);
  if(validateCardData.error){
      toast.error(`${validateCardData.error}`, {
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

  axios.post("/cards",{
    title:bizCardInfo.title,
    subTitle:bizCardInfo.title,
    description:bizCardInfo.description,
    address:bizCardInfo.address,
    phone:bizCardInfo.phone,
    url:bizCardInfo.url,
  }).then((res)=>{
toast.success('Card Added Successfully!', {
position: "bottom-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});
history.push("/mycards");
  }).catch((err)=>{
      toast.error(`${err.response.data}`, {
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
<div className="backgroundbDiv">
<div className="registerbPageDiv">
    <h1 className='titleText'>Register For Busnisses</h1>
    {
      tryToLogin && <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    }
    { !tryToLogin && 
 <div  className="regsterbForm"> 
           <div className="mb-1">
           <label htmlFor="exampleInputEmail1" className="form-label">Busniss Name</label>
           <input type="text" className="form-control" id="title" value={bizCardInfo.title} 
           onChange={onChangeCardInputs}
           aria-describedby="emailHelp" />
           <div id="emailHelp" className="form-text"></div>
           </div>
             
           <div className="mb-1">
           <label htmlFor="exampleInputEmail1" className="form-label">Subtitle</label>
           <input type="text" className="form-control" id="subTitle" value={bizCardInfo.subTitle} 
           onChange={onChangeCardInputs}
           aria-describedby="emailHelp" />
           <div id="emailHelp" className="form-text"></div>
           </div>

              <div className="mb-1">
           <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
           <input type="text" className="form-control" id="description" value={bizCardInfo.description} aria-describedby="emailHelp" onChange={onChangeCardInputs}/>
           <div id="emailHelp" className="form-text"></div>
           </div>

           <div className="mb-1">
           <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
           <input type="text" className="form-control" id="address" value={bizCardInfo.address} aria-describedby="emailHelp" onChange={onChangeCardInputs} />
           <div id="emailHelp" className="form-text"></div>
           </div>
  
           <div className="mb-1">
           <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
           <input type="tel" className="form-control" id="phone" value={bizCardInfo.phone} aria-describedby="emailHelp" onChange={onChangeCardInputs}/>
           <div id="emailHelp" className="form-text"></div>
           </div>

           <div className="mb-1">
           <label htmlFor="exampleInputEmail1" className="form-label">Image Url</label>
           <input type="url" className="form-control" id="url" value={bizCardInfo.url} aria-describedby="emailHelp" onChange={onChangeCardInputs}/>
           <div id="emailHelp" className="form-text"></div>
           </div>

           <button  className="btn btn-primary signInBtn" onClick={createBizCard}>Done</button>
           </div>}
  </div>
</div>
  );
}

export default RegisterForBusinessAddCard;
