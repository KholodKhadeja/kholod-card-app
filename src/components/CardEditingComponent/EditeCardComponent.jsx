import  { useState , useEffect} from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import "./CardComponent.scss";

const EditeCardComponent = () => {
  const history=useHistory();
const [bizCard, setBizCard]= useState({
  title:"",
  subTitle:"",
  description:"",
  address:"",
  phone:"",
  url:"",
});
let {id} = useParams();
useEffect(() => {
(async()=>{
  try{
    let {data} = await axios.get(`cards/card/${id}`);
    setBizCard({
      title:data.title,
      subTitle:data.subTitle,
      description:data.description,
      address:data.address,
      phone:data.phone,
      url:data.image.url,
    });
  }catch(err){
    toast.error("Oops! Card Can't be Displayed!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
})()
}, []);

const onInputsChangeValue = (ev)=>{
  let bizCardData=JSON.parse(JSON.stringify(bizCard));
  if(bizCardData.hasOwnProperty(ev.target.id)){
    bizCardData[ev.target.id] = ev.target.value;
    setBizCard(bizCardData);
  }
}

const saveUpdatedChanges = async (ev)=>{
  ev.preventDefault();
  try{
    let {data} = await axios.put(`cards/${id}`,{
      ...bizCard,
      alt: bizCard.title,
    })
    toast.success('Card Was Successfully Updated!', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      history.push("/mycards");
  }catch(err){
    toast.error("Ooops, Card Can't Be Updated!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
}
 return (
<div className='mainContainer'>
<form onSubmit={saveUpdatedChanges} className="fromStyling">
<div className="mb-3">
        <input type="text" className="form-control" id="title" aria-describedby="emailHelp" value={bizCard.title} 
    onChange={onInputsChangeValue}/>
  </div>
  <div className="mb-3">
        <input type="text" className="form-control" id="subTitle" aria-describedby="emailHelp" value={bizCard.subTitle} 
    onChange={onInputsChangeValue}/>
  </div>
  <div className="mb-3">
        <input type="text" className="form-control" id="description" aria-describedby="emailHelp" value={bizCard.description} 
    onChange={onInputsChangeValue}/>
  </div>
  <div className="mb-3">
        <input type="text" className="form-control" id="address" aria-describedby="emailHelp" value={bizCard.address} 
    onChange={onInputsChangeValue}/>
  </div>
  <div className="mb-3">
    <input type="text" className="form-control" id="phone" aria-describedby="emailHelp" value={bizCard.phone} 
    onChange={onInputsChangeValue}/>
  </div>

  <div className="mb-3">
    <input type="text" className="form-control" id="url" aria-describedby="emailHelp" value={bizCard.url} 
    onChange={onInputsChangeValue}/>
  </div>

    <button type="submit" className="btn btn-primary saveBtn"> Save Changes</button>
</form>
<img  src={bizCard.url} className="displayImg"/>
</div>
    );
}

export default EditeCardComponent;
