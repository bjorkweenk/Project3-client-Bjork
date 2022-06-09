//import { Link, AuthContext } from 'react-router-dom'
import React , { useState, useContext, useEffect } from "react";
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
          <a href="/filtered-stores/Pizza"><img class="circle" src="pizza1.png" width={100} height={100} />
          <p> Pizza </p></a>
        </div>

        <div class="cuisinetype">
          <a href="/filtered-stores/Sushi"><img class="square" src="Sushi.png" width={100} height={100} />
          <p> Sushi </p></a>
        </div>

        <div class="cuisinetype">
        <a href="/filtered-stores/Thai"><img class="square" src="thai.png" width={100} height={100} />
          <p> Thai</p></a>
        </div>

        <div class="cuisinetype">
        <a href="/filtered-stores/Chinese"><img class="gyoza" src="chinese1.png" width={100} height={100} />
          <p> Chinese </p> </a>
        </div>

        <div class="cuisinetype">
        <a href="/filtered-stores/Ramen"><img class="gyoza" src="ramenn.png" width={100} height={100} />
          <p> Ramen </p> </a>
        </div>

        <div class="cuisinetype">
        <a href="/filtered-stores/Soup"><img class="gyoza" src="soup.png" width={100} height={100} />
          <p> Soup</p> </a>
        </div>

        <div class="cuisinetype">
        <a href="/filtered-stores/Italian"><img class="square" src="italian.png" width={100} height={100} />
          <p> Italian</p></a>
        </div>

        <div class="cuisinetype">
        <a href="/filtered-stores/Korean"><img class="square" src="korean.png" width={100} height={100} />
          <p> Korean</p></a>
        </div>

        <div class="cuisinetype">
        <a href="/filtered-stores/Vegan"><img class="square" src="vegan.png" width={100} height={100} />
          <p> Vegan</p></a>
        </div>

        <div class="cuisinetype">
        <a href="/filtered-stores/Healthy"><img class="gyoza" src="healthy1.png" width={100} height={100} />
          <p> Healthy</p></a>
        </div>

        <div class="cuisinetype">
        <a href="/filtered-stores/Indian"><img class="square" src="indian.png" width={100} height={100} />
          <p> Indian </p></a>
        </div>

        <div class="cuisinetype">
        <a href="/filtered-stores/Burgers"><img class="gyoza" src="hambrgerss.png" width={100} height={100} />
          <p> Burgers</p></a>
        </div>

        <div class="cuisinetype">
        <a href="/filtered-stores/Breakfast"> <img class="square" src="breakfast.png" width={100} height={100} />
          <p> Breakfast</p> </a>
        </div>

        <div class="cuisinetype">
        <a href="/filtered-stores/Salad"> <img class="square" src="Salads.png" width={100} height={100} />
          <p> Salads</p> </a>
        </div>

        <div class="cuisinetype">
        <a href="/filtered-stores/Mexican"> <img class="square" src="/mexican.png" width={100} height={100} />
          <p> Mexican</p> </a>
        </div>

        <div class="cuisinetype">
        <a href="/filtered-stores/Vegetarian"> <img class="gyoza" src="/vegetarian.png" width={100} height={100} />
          <p> Vegetarian</p> </a>
        </div>

        <div class="cuisinetype">
        <a href="/filtered-stores/Sandwiches"><img class="gyoza" src="sandwhich.png" width={100} height={100} />
          <p> Sandwhich</p> </a>
        </div>

        <div class="cuisinetype">
        <a href="/filtered-stores/Mediterranean"> <img class="meditareann" src="/meditareannn.png" width={100} height={100}/>
          <p> Mediterranean</p> </a>
        </div>
      </div>
      {friendsStores?.map((favStore, index)=>(
        <>
        <StoreCard key={index} store={favStore.store} />
        <div className="borderLikes">
        <img class="borderPhoto" src= {favStore.friend.userImg} width={50} height={50} alt=''/>
        <p className="borderName">{favStore.friend.username}</p>
        </div>
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
