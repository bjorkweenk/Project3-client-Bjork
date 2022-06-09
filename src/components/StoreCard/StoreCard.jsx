import React from "react";
import "./StoreCard.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
//import { useContext } from "react";
//import { AuthContext } from "../../context/auth.context";
import LikesBtn from "../Likes/LikesBtn"

const StoreCard = ({ store }) => {
  //const { user } = useContext(AuthContext);
   console.log('STORE!!', store)
  return (
    <div className="StoreCard">

      <div className="layer">
      <img className="storeImage" src={store.storeImg} height="140px" width="340px"/>
      </div>
     
      <a className="storeNameA" href={`/store-details/${store._id}`}> <p className="storename"> {store.storeName}</p> </a>
      
      <div>
        <div className="tags">
          <div className="tagsorder">
          <a href={store.storeAddress} target="_blank">
          <p className="cardadress"> See location </p> 
          </a>
          <br></br>
          <a className="card-text" href={store.storePhone}> <p> Phone</p> </a>
          <p className="card-text">{store.deliveryTime}</p>
          <p className="card-text">{store.priceRange}</p>
          </div>
        
        <div className="favoritelikes">
        {/*  <p className="card-text">{store.storeLikes} </p>     */} 
       <LikesBtn className="card-text" store={store}/>
       </div>
         </div>
         </div>
        </div>
     
  );
};

export default StoreCard;