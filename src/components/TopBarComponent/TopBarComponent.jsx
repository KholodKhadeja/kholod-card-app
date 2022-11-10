import React, { Fragment } from 'react';
import "./TopBarComponent.scss";
import ListItemForTopBar from 'components/listItemForTopBar';
import { Link } from 'react-router-dom';

const TopBarComponent = () => {
    return (
    <Fragment>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">
        <img src="https://github.com/KholodKhadeja/logoImage/blob/main/logoImg.png?raw=true"  width="90" height="50"/>
        </a>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* /*here will be the map on the links lists*/ }
        <ListItemForTopBar />
      </ul>

      <span className="navbar-text">
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
