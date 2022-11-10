import React from 'react';
import { Fragment } from 'react';
import "./CardComponent.scss";
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';


const CardComponent =()=>{
  // Vertical Card
return(
<div className="card cardV">
  <img src="https://github.com/KholodKhadeja/ProjectImages/blob/main/cardImg.jpg?raw=true" 
  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
     content.</p>
     <p className="card-text"><HomeIcon/>Address</p>
     <p className="card-text"><PhoneIcon/>Phone</p>
    {/* <a href="#" className="btn btn-primary"></a> */}
  </div>
</div>

);
}

export default CardComponent;
