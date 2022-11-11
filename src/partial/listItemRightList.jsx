import { Fragment } from "react";

const ListItemRightList = ({label}) => {
    if(label === "For Busniess"){
       return(<button type="button" className="btn btn-primary forBusBtn"> {label}</button>);
     }
     if(label === "Logout"){
      return(<button type="button" className="btn btn-primary forBusBtn"> {label}</button>);
    }  else{
       return(
         <a  className="homeBtns" href="#">{label} | </a>
       );
}
}

export default ListItemRightList;
