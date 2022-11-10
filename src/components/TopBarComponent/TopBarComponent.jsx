import React, { Fragment } from 'react';
import "./TopBarComponent.scss";
import ListItemForTopBar from 'components/listItemForTopBar';
import { Link } from 'react-router-dom';

let unLoggedUser={
  leftList:[
{
  label:"Home",
  url:"/",
},
{
  label:"About Us",
  url:"/",
}], 
rightList:[
  {
    label:"Login",
    url:"/",
  },
  {
    label:"Register",
    url:"/",
  },
  {
    label:"Register for Busniss",
    url:"/",
  }
], 
}

let LoggedInUser={
  leftList:[
{
  label:"Home",
  url:"/",
},
{
  label:"My Cards", /*for busniss show the button of add*/
  url:"/",
},
{
  label:"About Us",
  url:"/",
}], 
rightList:[
  {
    label:"User name",
    url:"/",
  },
  {
    label:"Logout",
    url:"/",
  }
], 
}
const TopBarComponent = () => {
    return (
    <Fragment>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">
        <img src="https://github.com/KholodKhadeja/logoImage/blob/main/logoImg.png?raw=true"  width="90"
         height="50"/>
        </a>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* /*here will be the map on the links lists*/ }
        <ListItemForTopBar />{/*this is the left container*/}
      </ul>

      <span className="navbar-text">
        {/*right list container - will be rendered differently*/}
      <a  className="homeBtns"> Login</a> |
      {/* <Link to={""} className="homeBtns">Login</Link> | */}
      <a  className="homeBtns"> Register</a> | 
      <button type="button" className="btn btn-primary forBusBtn"> For Busniess</button>
      </span>
    </div>
  </div>
</nav>
</Fragment>
    );
}

export default TopBarComponent;
