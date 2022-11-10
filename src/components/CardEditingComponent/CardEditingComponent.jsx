import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';


const CardEditingComponent = () => {
    return (
<div className="card cardV">
  <img src="https://github.com/KholodKhadeja/ProjectImages/blob/main/cardImg.jpg?raw=true" 
  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
     content.</p>
     <p className="card-text"><HomeIcon/>Address</p>
     <p className="card-text"><PhoneIcon/>Phone</p>
     {/* <a href="#" className="btn btn-primary"><EditIcon/>Edit</a>&nbsp;&nbsp;
        <a href="#" className="btn btn-danger"><DeleteForeverIcon/>Delete</a> */}
        <a href="#" className="btn btn-primary editBtn"><BorderColorIcon/> &nbsp;Edit</a>&nbsp;&nbsp;
        <a href="#" className="btn btn-danger"><DeleteForeverIcon/> &nbsp;Delete</a> 

  </div>
</div>
    );
}

export default CardEditingComponent;
