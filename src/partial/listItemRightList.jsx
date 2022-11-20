import { Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Link } from "react-router-dom";
import { authActions } from "store/auth";


const ListItemRightList = ({label,link}) => {
  const userName= useSelector((state)=>state.auth.userData);
  const dispatch=useDispatch();
  const handlePageLogout = () =>{
    localStorage.clear();
   dispatch(authActions.logout());
  }

    if(label === "For Busniess"){
       return(
        <li className="nav-item">
       <button  className="btn btn-primary forBusBtn" to={link}> {label}</button>
       </li>
       );
     }
     if(label === "Logout"){
      return(  <li className="nav-item">
      <Link  className="btn btn-primary forBusBtn" onClick={handlePageLogout}>
         {label}</Link></li>
         );
    }
    if(label === "name"){
      return(
        <li className="nav-item">
        <span  className="homeBtns">{userName.name} | </span></li>
      )
    }
    else{
       return(  <li className="nav-item">
         <NavLink  className="homeBtns" to={link}   isActive={(match, location) => match && match.isExact}>
          {label} | </NavLink></li>
       );
}
}

export default ListItemRightList;
