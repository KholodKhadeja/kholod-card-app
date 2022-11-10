import { useState, useEffect } from 'react';
import CardComponent from 'components/CardComponent/CardComponent';
import HCardComponent from 'components/CardComponent/HCardComponent';
import CardEditingComponent from 'components/CardEditingComponent/CardEditingComponent';
import HCardEditingComponent from 'components/CardEditingComponent/HCardEditingComponent';
import TextRotateUpIcon from '@mui/icons-material/TextRotateUp';
import TextRotationDownIcon from '@mui/icons-material/TextRotationDown';

import "./MyCardsPage.scss";
import axios from 'axios';

let originalArray=[];

const MyCardsPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [busnissCards, setBusnissCards] = useState(originalArray);

  useEffect(()=>{    /*later change it:  GET /api/cards/card/:id*/
    (async()=>{
      try{
        let {data} = await axios.get("/cards/my-cards");
        console.log("cards loaded successfully");
        originalArray=data;
        setBusnissCards(originalArray);
      }catch(err){
        console.log("cards failed to sync");
      }
    })();
     },[]);


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
const handleSearchInputChange = (ev)=>{
    setSearchInput(ev.target.value);
}

const function1 = () =>{

}
const function2 = () =>{
    
}
 return (
        <div className="conatinerDiv">
        <div className="myCardsPageDiv">
            <h1 className="myCardsTitle">My Cards</h1>
            <div className='d-flex justify-content-between'>
              <div className="d-flex flex-row  mb-3  justify-content-center">
            <div className="input-group mb-1">
                 <span className="input-group-text" id="basic-addon1">Search</span>
                <input type="text" className="form-control" placeholder="Search Word" aria-label="Username" 
                aria-describedby="basic-addon1" value={searchInput} onChange={handleSearchInputChange} />
            </div>
            {/*this button should be showd only to biz*/}
            <button type="button" className="btn btn-danger btnAddCard">Add Card</button>
            </div>
            <div className='rightContainer'>
           < TextRotateUpIcon className='sortIcon'  onClick={function1} />
          < TextRotationDownIcon className='sortIcon' onClick={function2}/>
            </div>
            </div>

            <div className="cardsContainer">
              { console.log(busnissCards)}
            {  busnissCards.map((item,idx) => (
                    <HCardEditingComponent  key={"card"+idx} title={item.title} desc={item.descreption}
                     id={item._id}
                    address={item.address} phone={item.phone} imgUrl={item.image.url} 
                    onCardDelete={handleChildDelete}
                    />
                ))}
               {/* <HCardEditingComponent /> */}
               {/* <CardComponent/>
               <CardEditingComponent /> */}

            </div>
        </div>
     </div>
    );
}

export default MyCardsPage;
