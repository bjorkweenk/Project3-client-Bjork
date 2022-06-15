import React, { useState, useEffect, useContext } from "react";
import StoresService from "../../services/store.service.js";
import "./LikesBtn.css";
import { AuthContext } from "../../context/auth.context.js";

export default function LikesBtn({ store }) {
  const [likes, setLikes] = useState(null);
  const { user } = useContext(AuthContext);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setLikes(store.storeLikes);
  }, []);

  const handleOnChange = (e) => {
    e.preventDefault();
    const userID = user?._id;
    const includesUser = likes.map(({ _id }) => _id).includes(userID);
    setIsLiked(includesUser);
    if (!isLiked) {
      StoresService.getStoresLiked(store._id).then((response) => {
        setLikes(response.data);
      });
    }
  };

  return (
    <>
      <div>
       
   
          <button className="heartbutton" onClick={handleOnChange}>
            <div>
              <img class="heartbutton1"
                src="../heart.png"
                alt="like button"
              /> 
            </div>
            <p class="likes">{likes?.length} Likes </p> 
          </button>
        </div>
      
    </>
  );
}

