import { useState, useEffect, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import CreateCardComponent from 'components/CardEditingComponent/CreateCardComponent';
import TextRotateUpIcon from '@mui/icons-material/TextRotateUp';
import TextRotationDownIcon from '@mui/icons-material/TextRotationDown';
import {  useLocation, useHistory  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./MyCardsPage.scss";
import Joi from 'joi-browser';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import cardSchema from 'validation/card.validation';
import { redirect } from "react-router-dom";


let originalArray=[];

const MyCardsPage = () => {
  const [cardAddedSuccessfully , setCardAddedSuccessfully] = useState(false);
  const isBizUser = useSelector((state)=>state.auth.userData);
  let showAddCardBtn =isBizUser.biz; 
  const history=useHistory();
  const location = useLocation();
  const [show, setShow] = useState(false);
  let showModalStatus = false; 
  const [newCardInfo, setNewCardInfo]=  useState({
    title:"",
    subTitle:"",
    description:"",
    address:"",
    phone:"",
    url:""
  })
  const [searchInput, setSearchInput] = useState("");
  const [busnissCards, setBusnissCards] = useState(originalArray);

  useEffect(() => {
    showModalStatus && setShow(true);
    !showModalStatus && setShow(false);
   }, [showModalStatus]);
 
  useEffect(()=>{
    (async()=>{
      try{
        let {data} = await axios.get("/cards/my-cards");
        originalArray=data;
        setBusnissCards(originalArray);
      }catch(err){
        toast.error('No Cards To Show!', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    })();
     },[]);

useEffect(() => {
const  qparams =  new URLSearchParams(location.search);
let newFilteredArr= undefined;
if(qparams.has("filter")){
  let filter = qparams.get("filter");
  let regex = new RegExp(filter, "i");
   newFilteredArr = JSON.parse(JSON.stringify(originalArray));
   newFilteredArr = newFilteredArr. filter ((item)=> regex.test(item));
   if(filter !== searchInput){
    setSearchInput(filter);
   }
}
if(qparams.has("sort")){
  if(!newFilteredArr){
    newFilteredArr = JSON.parse(JSON.stringify(busnissCards));
  }
  if(qparams.get("sort")=== "asc"){
    newFilteredArr.sort();
  }
  if(qparams.get("sort")=== "desc"){
    newFilteredArr.reverse(newFilteredArr.sort());
  }
}
if (newFilteredArr) setBusnissCards(newFilteredArr);
}, [location]);

 useEffect(() => {
  let regex = new RegExp(searchInput, "i");
  let clonedArr = JSON.parse(JSON.stringify(originalArray));
  clonedArr=clonedArr.filter((item) => regex.test(item.title));
  setBusnissCards(clonedArr);
 }, [searchInput]);

 const handleClose = () => {
  setShow(false);
  window.location.reload();
}


const handleChildDelete =(id)=>{
    originalArray =originalArray.filter((item)=>item._id !== id);
     setBusnissCards(originalArray);
}
const onInputsChangeValue = (ev) =>{
  let newCardInfoC=JSON.parse(JSON.stringify(newCardInfo));
  if(newCardInfoC.hasOwnProperty(ev.target.id)){
    newCardInfoC[ev.target.id]=ev.target.value;
     setNewCardInfo(newCardInfoC);
}
}

const handleSearchInputChange = (ev)=>{
    setSearchInput(ev.target.value);
}
const submitSearchWord = (ev) =>{
if(ev.code ==="Enter"){
  let qparams =  new URLSearchParams(location.search);
  qparams.set("filter", searchInput);
  history.push(`/mycards?${qparams.toString()}`);
}
}

const sortAsc = () =>{
let qparams= new URLSearchParams(location.search);
qparams.set("sort","asc");
history.push(`/mycards?${qparams.toString()}`);
}
const sortDes = () =>{
  let qparams= new URLSearchParams(location.search);
  qparams.set("sort","desc");
  history.push(`/mycards?${qparams.toString()}`);
}

const handleAddCardToDB = (ev) =>{
  ev.preventDefault();
  const validateCardData=Joi.validate(newCardInfo, cardSchema);
  if(validateCardData.error){
      toast.error(`${validateCardData.error}`, {
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

  axios.post("/cards/",{
    title:newCardInfo.title,
    subTitle:newCardInfo.subTitle,
    description:newCardInfo.description,
    address:newCardInfo.address,
    phone:newCardInfo.phone,
    url:newCardInfo.url,
  }).then((res)=>{
    toast.success('Card Added Successfully!', {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      handleClose();
  }).catch((err)=>{
    // toast.error(`${err.request.response}`, {
    //   position: "bottom-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "dark",
    //   });
  })
}

 return (
  <Fragment>
        <div className="conatinerDiv">
        <div className="myCardsPageDiv">
            <h1 className="myCardsTitle">My Cards</h1>
            <div className='d-flex justify-content-between'>
              <div className="d-flex flex-row  mb-3  justify-content-center">
            <div className="input-group mb-1">
                 <span className="input-group-text" id="basic-addon1">Search</span>
                <input type="text" className="form-control" placeholder="Search Word" aria-label="Username" 
                aria-describedby="basic-addon1" value={searchInput} onChange={handleSearchInputChange}  
                onKeyUp={submitSearchWord}/>
            </div>
            {/*this button should be showd only to biz*/}

            { showAddCardBtn && <button className="btn btn-danger btnAddCard" onClick={()=>{
                setShow(true);
            }}>
            Add Card
             </button>}

            </div>
            <div className='rightContainer'>
           < TextRotateUpIcon className='sortIcon'  onClick={sortAsc} />
          < TextRotationDownIcon className='sortIcon' onClick={sortDes}/>
            </div>
            </div>

            <div className="cardsContainer">
            {  busnissCards.map((item,idx) => (
                    <CreateCardComponent  key={"card"+idx} title={item.title} desc={item.descreption}
                     id={item._id}
                    address={item.address} phone={item.phone} imgUrl={item.image.url} 
                    onCardDelete={handleChildDelete}
                    />
                ))}
            </div>
        </div>
     </div>


     {/* ******************************************************************************************** */}
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Card Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
{/* ****************************************the modal body************************************* */}
<form onSubmit={handleAddCardToDB}>
<div className="mb-3">
        <input type="text" className="form-control" id="title"  value={newCardInfo.title} 
    onChange={onInputsChangeValue} placeholder="Title"/>
  </div>
  <div className="mb-3">
        <input type="text" className="form-control" id="subTitle" 
        value={newCardInfo.subTitle} 
    onChange={onInputsChangeValue} placeholder="Sub Title"/>
  </div>
  <div className="mb-3">
        <input type="text" className="form-control" id="description" 
        value={newCardInfo.description} 
    onChange={onInputsChangeValue} placeholder="Description"/>
  </div>
  <div className="mb-3">
        <input type="text" className="form-control" id="address"  
        value={newCardInfo.address} 
    onChange={onInputsChangeValue} placeholder="address"/>
  </div>
  <div className="mb-3">
    <input type="text" className="form-control" id="phone" 
    value={newCardInfo.phone} 
    onChange={onInputsChangeValue} placeholder="Phone"/>
  </div>
  <div className="mb-3">
    <input type="text" className="form-control" id="url" 
    value={newCardInfo.url} 
    onChange={onInputsChangeValue} placeholder="Image URL"/>
  </div>
  <button type="submit" className="btn btn-danger formBtn">
            Add Card
          </button>

  <button className="btn btn-dark formBtn" onClick={handleClose}>
            Close
   </button>
  </form>
{/* ****************************************the end of modal body************************************* */}
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
     </Fragment>
    );
}

export default MyCardsPage;
