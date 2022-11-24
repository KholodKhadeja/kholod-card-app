import logo from './logo.svg';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import AutoLogin from 'service/autoLogin';
import jwt_decode from "jwt-decode";
import './App.scss';
import "pages/HomePage/HomePage";
import HomePageComponent from 'pages/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  BrowserRouter,
   Redirect,
} from "react-router-dom";
import TopBarComponent from 'components/TopBarComponent/TopBarComponent';
import FooterComponent from 'components/Footer/FooterComponent';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import RegisterForBusiness from 'pages/RegisterForBusiness/RegisterForBusiness';
import AboutUsPage from 'pages/AboutUsPage/AboutUsPage';
import MyCardsPage from 'pages/MyCardsPage/MyCardsPage';
import { ToastContainer, toast } from 'react-toastify';
import EditeCardComponent from 'components/CardEditingComponent/EditeCardComponent';
import { authActions } from 'store/auth';
import FailedPage from 'pages/failedPage';
import AuthGuardRoute from 'components/AuthGuardRoute';
function App() {
  const dispatch = useDispatch();
useEffect(() => {
(async()=>{
  try{
    let {data} = await AutoLogin();
    let dataFromToken= jwt_decode(localStorage.getItem("token"));
    dispatch(authActions.login(dataFromToken));
    if(data){
      dispatch(authActions.updateUserData(data));
     }
  }catch(err){
    toast.error("Error Occured, please try to login again!", {
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
})();
}, []);

return (
   <div className='App container'>
   <ToastContainer/>
    <TopBarComponent />

  <Switch>
  <Route path="/" exact  component={HomePageComponent}></Route>
  <Route path="/login"   component={LoginPage}></Route>
  <Route path="/register" component={RegisterPage}></Route>
  <Route path="/registerb" component={RegisterForBusiness}></Route>
  <Route path="/about" component={AboutUsPage}></Route>
  <AuthGuardRoute path="/mycards" component={MyCardsPage}></AuthGuardRoute>
  <Route path="/editcard/:id" component={EditeCardComponent}></Route>
  <Route path="*" component={FailedPage}></Route>
  </Switch>
   <FooterComponent/>
   </div>
  );
}

export default App;
