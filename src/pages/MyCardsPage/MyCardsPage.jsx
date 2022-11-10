import { useState, useEffect } from 'react';
import CardComponent from 'components/CardComponent/CardComponent';
import HCardComponent from 'components/CardComponent/HCardComponent';
import CardEditingComponent from 'components/CardEditingComponent/CardEditingComponent';
import HCardEditingComponent from 'components/CardEditingComponent/HCardEditingComponent';
import TextRotateUpIcon from '@mui/icons-material/TextRotateUp';
import TextRotationDownIcon from '@mui/icons-material/TextRotationDown';

import "./MyCardsPage.scss";

let temporareArr=[
    {
        id:"1",
      title:"Kholod 1",
      descreption:"shesmo shesmo shesmo shesmo shesmo shesmo shesmo shesmo shesmo shesmo shesmo shesmo",
      address:"Qalansuwa",
      phone:"0525847304",
      imgUrl:"https://github.com/KholodKhadeja/ProjectImages/blob/main/cardImg.jpg?raw=true",
    },
    {
        id:"2",
      title:"No One",
      descreption:"shesmo shesmo shesmo shesmo shesmo shesmo shesmo shesmo shesmo shesmo shesmo shesmo",
      address:"Tira",
      phone:"0525263304",
      imgUrl:"https://github.com/KholodKhadeja/ProjectImages/blob/main/cardImg.jpg?raw=true",
    },
    {
        id:"3",
        title:"Ana",
        descreption:"shesmo shesmo shesmo shesmo shesmo shesmo shesmo shesmo shesmo shesmo shesmo shesmo",
        address:"Tira",
        phone:"0525267304",
        imgUrl:"https://github.com/KholodKhadeja/ProjectImages/blob/main/cardImg.jpg?raw=true",
      },
      {
        id:"4",
        title:"Mako",
        descreption:"shesmo shesmo shesmo shesmo shesmo shesmo shesmo shesmo shesmo shesmo shesmo shesmo",
        address:"Tira",
        phone:"0525263304",
        imgUrl:"https://github.com/KholodKhadeja/ProjectImages/blob/main/cardImg.jpg?raw=true",
      },
  ];
const MyCardsPage = () => {
 const [searchInput, setSearchInput] = useState("");
 const [busnissCards, setBusnissCards] = useState(temporareArr);

 useEffect(() => {
  let regex = new RegExp(searchInput, "i");
  let clonedArr = JSON.parse(JSON.stringify(temporareArr));
  clonedArr=clonedArr.filter((item) => regex.test(item.title));
  setBusnissCards(clonedArr);
 }, [searchInput]);

const handleChildDelete =(id)=>{
    temporareArr =temporareArr.filter((item)=>item._id !== id);
     setBusnissCards(temporareArr);
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
            <div className="input-group mb-1">
                 <span className="input-group-text" id="basic-addon1">Search</span>
                <input type="text" className="form-control" placeholder="Search Word" aria-label="Username" 
                aria-describedby="basic-addon1" value={searchInput} onChange={handleSearchInputChange} />
            </div>
            <div className='rightContainer'>
           < TextRotateUpIcon className='sortIcon'  onClick={function1} />
          < TextRotationDownIcon className='sortIcon' onClick={function2}/>
            </div>
            </div>

            <div className="cardsContainer">
              { busnissCards.map((item,idx) => (
                    <HCardEditingComponent  key={"card"+idx} title={item.title} desc={item.descreption}
                     id={item._id}
                    address={item.address} phone={item.phone} imgUrl={item.img.url} 
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
