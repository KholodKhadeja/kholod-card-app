
import "./TopBarComponent.scss";
import { Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';
import ListItemRightList from 'partial/listItemRightList';
import ListItemLeftList from 'partial/listItemLeftList';
import { authActions } from "store/auth";

// import { Link } from 'react-router-dom';
const TopBarComponent = () => {
  const dispatch=useDispatch();
const loggedIn=useSelector((state)=>state.auth.loggedInVar);
const loggedInUserData=useSelector((state)=> state.auth.userInfo);{/*we will use it late with useRef*/}
// useEffect(() => {
// if() 
// }, [loggedIn]);

  let unLoggedleftList = [
    {
      label:"Home",
      url:"/",
    },
    {
      label:"About Us",
      url:"/",
    }];
    
    let unLoggedrightList=[
      {
        label:"Login",
        url:"/",
      },
      {
        label:"Register",
        url:"/",
      },
      {
        label:"For Busniess",
        url:"/",
      }
    ];
    
let LoggedInleftList= [
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
    }];
  let  LoggedInrightList=[
      {
        label:"User name",
        url:"/",
      },
      {
        label:"Logout",
        url:"/",
      }
    ];

    // const handlePageLogout=()=>{
    //    localStorage.clear();
    //    console.log("logout successfully done");
    //   //  dispatch(authActions.logout());
    // }
    return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src="https://github.com/KholodKhadeja/logoImage/blob/main/logoImg.png?raw=true"  width="90"
   height="50"/></a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" 
    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
   {
    loggedIn ?   LoggedInleftList.map((item, idx)=>(
      <ListItemLeftList  key={"left"+idx} label={item.label}/> )) :
           unLoggedleftList.map((item, idx)=>(
             <ListItemLeftList  key={"left"+idx} label={item.label}/>
                  ))
   }
      </ul>

      <ul className="d-flex navbar-nav mb-2 mb-lg-0"> 
          {
            loggedIn ? LoggedInrightList.map((item, idx)=>(
              <ListItemRightList key={idx+"right"} label={item.label}/>
            )) : 
            unLoggedrightList.map((item, idx)=>(
              <ListItemRightList key={idx+"right"} label={item.label}/>
            ))
        }
      </ul>
    </div>
  </div>
</nav>
</Fragment>
    );
}

export default TopBarComponent;
