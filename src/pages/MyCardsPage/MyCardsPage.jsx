import { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import CreateCardComponent from 'components/CardEditingComponent/CreateCardComponent';
import TextRotateUpIcon from '@mui/icons-material/TextRotateUp';
import TextRotationDownIcon from '@mui/icons-material/TextRotationDown';
import {  useLocation, useHistory  } from 'react-router-dom';
import "./MyCardsPage.scss";
import axios from 'axios';

let originalArray=[];

const MyCardsPage = () => {
  const history=useHistory();
  const location = useLocation();
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

  useEffect(()=>{    /*later change it:  GET /api/cards/card/:id*/
    (async()=>{
      try{
        let {data} = await axios.get("/cards/my-cards");
        originalArray=data;
        setBusnissCards(originalArray);
      }catch(err){
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
  if(qparams.get("sort")=== "asc"){
    newFilteredArr.reverse();
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

const handleChildDelete =(id)=>{
    originalArray =originalArray.filter((item)=>item._id !== id);
     setBusnissCards(originalArray);
}
const onInputsChangeValue = () =>{

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

const handleAddCardToDB = () =>{

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
                aria-describedby="basic-addon1" value={searchInput} onChange={handleSearchInputChange}  onKeyUp={submitSearchWord}/>
            </div>
            {/*this button should be showd only to biz*/}
            <button type="button" class="btn btn-danger btnAddCard" data-bs-toggle="modal" 
            data-bs-target="#exampleModal">
            Add Card
            </button>
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


     {/*the hidden modal - will be shown on button click*/}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" 
aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add Card</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
<div className="modal-body">
<form  className="fromStyling">
<div className="mb-3">
        <input type="text" className="form-control" id="title" aria-describedby="emailHelp" value={newCardInfo.title} 
    onChange={onInputsChangeValue}/>
  </div>
  <div className="mb-3">
        <input type="text" className="form-control" id="subTitle" aria-describedby="emailHelp" 
        value={newCardInfo.subTitle} 
    onChange={onInputsChangeValue}/>
  </div>
  <div className="mb-3">
        <input type="text" className="form-control" id="description" aria-describedby="emailHelp" 
        value={newCardInfo.description} 
    onChange={onInputsChangeValue}/>
  </div>
  <div className="mb-3">
        <input type="text" className="form-control" id="address" aria-describedby="emailHelp" 
        value={newCardInfo.address} 
    onChange={onInputsChangeValue}/>
  </div>
  <div className="mb-3">
    <input type="text" className="form-control" id="phone" aria-describedby="emailHelp" 
    value={newCardInfo.phone} 
    onChange={onInputsChangeValue}/>
  </div>

  <div className="mb-3">
    <input type="text" className="form-control" id="url" aria-describedby="emailHelp" 
    value={newCardInfo.url} 
    onChange={onInputsChangeValue}/>
  </div>

    <button type="submit" className="btn btn-primary saveBtn"> Save Changes</button>
</form>
</div>


      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-primary" onClick={handleAddCardToDB}>Add Card</button>
      </div>
    </div>
  </div>
</div>
{/* ************************************************************************************ */}
     </Fragment>
    );
}

export default MyCardsPage;
