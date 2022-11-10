import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';

const HCardEditingComponent = ({ title, desc, address, phone, imgUrl,id, onCardDelete}) => {
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
        {/* <a href="#" className="btn btn-primary"><EditIcon/>Edit</a>&nbsp;&nbsp;
        <a href="#" className="btn btn-danger"><DeleteForeverIcon/>Delete</a> */}
        <button href="#" className="btn btn-primary editBtn"><BorderColorIcon/> &nbsp;Edit</button>&nbsp;&nbsp;
        <button href="#" className="btn btn-danger" onClick={deleteCardFunc}><DeleteForeverIcon/> &nbsp;Delete</button> 
      </div>
    </div>
  </div>
</div>
    );
}

export default HCardEditingComponent;
