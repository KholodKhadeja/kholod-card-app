import logo from './logo.svg';
import './App.scss';
import "pages/HomePage/HomePage";
import HomePageComponent from 'pages/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import TopBarComponent from 'components/TopBarComponent/TopBarComponent';
import FooterComponent from 'components/Footer/FooterComponent';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import RegisterForBusiness1 from 'pages/RegisterForBusiness/RegisterForBusiness1';
import AboutUsPage from 'pages/AboutUsPage/AboutUsPage';
import MyCardsPage from 'pages/MyCardsPage/MyCardsPage';
import Modal from 'components/EditingModal/ModalComponent';
function App() {
  return (
   <div className='App container'>
    <TopBarComponent />

    <BrowserRouter>
  <Switch>
  <Route path="/" exact  component={HomePageComponent}></Route>
  <Route path="/login"   component={LoginPage}></Route>
  <Route path="/register" component={RegisterPage}></Route>
  <Route path="/registerb" component={RegisterForBusiness1}></Route>
  <Route path={"/about"} component={AboutUsPage}></Route>
  <Route path={"/mycards"} component={MyCardsPage}></Route>
  <Route path={"/modal"} component={Modal}></Route>
  </Switch>
  </BrowserRouter>

   <FooterComponent/>
   </div>
  );
}

export default App;
