import React from "react";
//import { Link, AuthContext } from 'react-router-dom'
import { useState, useContext, useEffect } from "react";
import StoresService from "../../services/store.service.js";
import "./HomePage.css";
import StoreCard from "../../components/StoreCard/StoreCard.jsx";

const HomePage = (props) => {
  const [cuisines, setFilteredCuisines] = useState(null);
  const [friendsStores, setFriendsStore] = useState(null);
  //const {user} = useContext(AuthContext)

  useEffect(() => {
    // <== ADD THE EFFECT
    StoresService.getAllCuisines()
      .then((response) => {
        setFilteredCuisines(response.data);
      })
      .catch((error) => error);
  }, []);

  useEffect(() => {
    StoresService.getStoresFriends()
      .then((response) => {
        console.log('RESPONSE DATA', response.data)
        setFriendsStore(response.data);
      })
      .catch((error) => error);
  }, [])


  const handleCuisine = (e) => {
    e.preventDefault();

    StoresService.getStoresByCuisine().then((cuisine) =>
      setFilteredCuisines(cuisine)
    );
  };

  return (
    <>
      <div class="logo">
        <img class="logo3" src="../../../logo.jpg" />
      </div>
      <div class="cuisine" style={{ display: "flex", overflowX: "scroll" }}>
        <div class="cuisinetype">
          <img class="circle" src="pizza1.png" width={100} height={100} />
          <p> Pizza </p>
        </div>

        <div class="cuisinetype">
          <img class="square" src="Sushi.png" width={100} height={100} />
          <p> Sushi </p>
        </div>

        <div class="cuisinetype">
          <img class="square" src="thai.png" width={100} height={100} />
          <p> Thai</p>
        </div>

        <div class="cuisinetype">
          <img class="gyoza" src="chinese1.png" width={100} height={100} />
          <p> Chinese </p>
        </div>

        <div class="cuisinetype">
          <img class="gyoza" src="ramenn.png" width={100} height={100} />
          <p> Ramen </p>
        </div>

        <div class="cuisinetype">
          <img class="gyoza" src="soup.png" width={100} height={100} />
          <p> Soup</p>
        </div>

        <div class="cuisinetype">
          <img class="square" src="italian.png" width={100} height={100} />
          <p> Italian</p>
        </div>

        <div class="cuisinetype">
          <img class="square" src="korean.png" width={100} height={100} />
          <p> Korean</p>
        </div>

        <div class="cuisinetype">
          <img class="square" src="vegan.png" width={100} height={100} />
          <p> Vegan</p>
        </div>

        <div class="cuisinetype">
          <img class="gyoza" src="healthy1.png" width={100} height={100} />
          <p> Healthy</p>
        </div>

        <div class="cuisinetype">
          <img class="square" src="indian.png" width={100} height={100} />
          <p> Indian </p>
        </div>

        <div class="cuisinetype">
          <img class="gyoza" src="hambrgerss.png" width={100} height={100} />
          <p> Hamburgers</p>
        </div>

        <div class="cuisinetype">
          <img class="square" src="breakfast.png" width={100} height={100} />
          <p> Breakfast</p>
        </div>

        <div class="cuisinetype">
          <img class="square" src="Salads.png" width={100} height={100} />
          <p> Salads</p>
        </div>

        <div class="cuisinetype">
          <img class="square" src="/mexican.png" width={100} height={100} />
          <p> Mexican</p>
        </div>

        <div class="cuisinetype">
          <img class="gyoza" src="/vegetarian.png" width={100} height={100} />
          <p> Vegetarian</p>
        </div>

        <div class="cuisinetype">
          <img class="gyoza" src="sandwhich.png" width={100} height={100} />
          <p> Sandwhich</p>
        </div>

        <div class="cuisinetype">
          <img
            class="meditareann"
            src="/meditareannn.png"
            width={100}
            height={100}
          />
          <p> Meditaranean</p>
        </div>
      </div>
      {friendsStores?.map((favStore, index)=>(
        <>
        <StoreCard key={index} store={favStore.store} />
        <p>Liked by {favStore.friend.username}</p>
        <img src= {favStore.friend.userImg}/>
        </>
      ))}
      {/*  <ul>
            {cuisines.map((cuisine) => (
        <div key={props.store._id} className="card">
          <h3><Link href={handleCuisine}>{cuisine}</Link></h3>
        </div>
      ))}
            </ul>  */}
    </>
  );

};
export default HomePage;
