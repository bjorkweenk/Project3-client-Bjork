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
        <div class="tags">
         {/* <p className="card-text">{store.storeAddress}</p> */}
         <p className="card-text">{store.storePhone}</p>

          <p className="card-text">{store.deliveryTime}</p>
          <p className="card-text">{store.priceRange}</p>
         {/*  <p className="card-text">{store.storeLikes}</p> */}
         {/*  <LikesBtn store={store}/> */}
         </div>
         </div>
        </div>
     
  );
};

export default StoreCard;