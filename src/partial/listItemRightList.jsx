import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from "store/auth";


const ListItemRightList = ({label,url}) => {
  const userName= useSelector((state)=>state.auth.userData);
  const dispatch=useDispatch();
  const handlePageLogout = () =>{
    localStorage.clear();
   dispatch(authActions.logout());
  }

    if(label === "For Busniess"){
       return(<a  className="btn btn-primary forBusBtn" to={url}> {label}</a>);
     }
     if(label === "Logout"){
      return(<button  className="btn btn-primary forBusBtn" onClick={handlePageLogout}>
         {label}</button>);
    }
    if(label === "name"){
      return(
        <span  className="homeBtns">{userName.name} | </span>
      )
    }
    else{
       return(
         <a  className="homeBtns" to={url}>{label} | </a>
       );
}
}

export default ListItemRightList;
