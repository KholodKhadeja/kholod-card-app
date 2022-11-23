import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import "./CardComponent.scss";

const CreateCardComponent = ({ title, desc, address, phone, imgUrl,id, onCardDelete}) => {
const deleteCardFunc = () =>{
  onCardDelete(id);
}
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
        <p className="card-text">{desc}</p>
        <p className="card-text"><HomeIcon/>{address}</p>
         <p className="card-text"><PhoneIcon/>{phone}</p>
        <Link to={`/editcard/${id}`} className="btn btn-primary editBtn"><BorderColorIcon/> 
        &nbsp;Edit</Link>&nbsp;&nbsp;
        <Link to="#" className="btn btn-danger" onClick={deleteCardFunc}><DeleteForeverIcon/> 
        &nbsp;Delete</Link> 
      </div>
    </div>
  </div>
</div>
    );
}

export default CreateCardComponent;
