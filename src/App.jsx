import logo from './logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
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
import useAutoLogin from 'hooks/useAutoLogin';
import TopBarComponent from 'components/TopBarComponent/TopBarComponent';
import FooterComponent from 'components/Footer/FooterComponent';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import RegisterForBusiness from 'pages/RegisterForBusiness/RegisterForBusiness';
import RegisterForBusinessAddCard from 'pages/RegisterForBusiness/RegisterForBusinessAddCard';
import AboutUsPage from 'pages/AboutUsPage/AboutUsPage';
import MyCardsPage from 'pages/MyCardsPage/MyCardsPage';
import { ToastContainer, toast } from 'react-toastify';
import EditeCardComponent from 'components/CardEditingComponent/EditeCardComponent';
import { authActions } from 'store/auth';
import FailedPage from 'pages/failedPage';
import AuthGuardRoute from 'components/AuthGuardRoute';
function App() {
  
  const autoLoginFunction = useAutoLogin();
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

return (
   <div className='App container'>
   <ToastContainer/>
    <TopBarComponent />
    { !tryToLogin && (
  <Switch>
  <Route path="/" exact  component={HomePageComponent}></Route>
  <Route path="/login"   component={LoginPage}></Route>
  <Route path="/register" component={RegisterPage}></Route>
  <Route path="/registerb" component={RegisterForBusiness}></Route>
  <Route path="/registerbcard" component={RegisterForBusinessAddCard}></Route>
  <Route path="/about" component={AboutUsPage}></Route>
  <AuthGuardRoute path="/mycards" component={MyCardsPage}></AuthGuardRoute>
  <Route path="/editcard/:id" component={EditeCardComponent}></Route>
  <Route path="*" component={FailedPage}></Route>
  </Switch>
    )}
   <FooterComponent/>
   </div>
  );
}

export default App;
