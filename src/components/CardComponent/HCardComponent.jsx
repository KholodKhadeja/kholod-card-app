import React from 'react';
import "./CardComponent.scss";
import { Fragment } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';

// Horizontal Card
const HCardComponent = ({ title, desc, address, phone, imgUrl,id}) => {
return (
<div className="card mb-3 cardH">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={imgUrl} 
      className="img-fluid rounded-start img-fluidH" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body card-bodyH">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">  {desc}</p>
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        <p className="card-text"><HomeIcon/>{address}</p>
     <p className="card-text"><PhoneIcon/>{phone}</p>
      </div>
    </div>
  </div>
</div>
    );
}

export default HCardComponent;
