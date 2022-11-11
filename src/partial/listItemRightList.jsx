import { Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from "store/auth";


const ListItemRightList = ({label}) => {
  const dispatch=useDispatch();

  const handlePageLogout = () =>{
    localStorage.clear();
    console.log("logout successfully done");
   dispatch(authActions.logout());
  }

    if(label === "For Busniess"){
       return(<button type="button" className="btn btn-primary forBusBtn"> {label}</button>);
     }
     if(label === "Logout"){
      return(<button type="button" className="btn btn-primary forBusBtn" onClick={handlePageLogout}> {label}</button>);
    }  else{
       return(
         <a  className="homeBtns" href="#">{label} | </a>
       );
}
}

export default ListItemRightList;
