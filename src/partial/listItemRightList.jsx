import { Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Link } from "react-router-dom";
import { authActions } from "store/auth";
import { useHistory } from "react-router-dom";


const ListItemRightList = ({label,link}) => {
  const userName= useSelector((state)=>state.auth.userData);
  const dispatch=useDispatch();
  const history=useHistory();
  const handlePageLogout = () =>{
    localStorage.clear();
   dispatch(authActions.logout());
   history.push("/");
  }

    if(label === "For Busniess"){
       return(
        <li className="nav-item">
       <button  className="btn btn-primary forBusBtn"onClick={()=>{history.push(link)}}> {label}</button>
       </li>
       );
     }
     if(label === "Logout"){
      return(  <li className="nav-item">
      <a  className="btn btn-primary forBusBtn" onClick={handlePageLogout}>
         {label}</a></li>
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
