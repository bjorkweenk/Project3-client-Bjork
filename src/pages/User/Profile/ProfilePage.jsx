//import axios from "axios"
//import { useContext } from "react"
import { Container } from "react-bootstrap"
//import Favourites from "./../../../components/Favourites/Favourites"
//import { AuthContext } from "../../../context/auth.context
import "./Profile.css"

const ProfilePage = ({ username, userImg, favoriteStores, storeImage }) => {
    return (
        <Container>
            <h1> Name {username}</h1> 
          <div class="borderUserPicture">  <img src={userImg} alt="picture user"></img> </div>
          <br></br>
            <a href="../ProfileEdit"><button> edit</button></a>
    


         {/*  <Favourites likes={favoriteStores}/> */} 
            <h4> You're Favorites </h4>

<div class="container">
  <div class="row">
  

    <br></br>
    <div className="ContainerPicture">
    <img src={storeImage} alt=" store image "></img>

    <br></br>
      Restaurant 2
    </div>

    <br></br>
    <div className="ContainerPicture">
    <img src={storeImage} alt=" store image "></img>
    <br></br>
      Restaurant 3
    </div>

    <br></br>
    <div className="ContainerPicture">
    <img src={storeImage} alt=" store image "></img>
    <br></br>
      Restaurant 2
    </div>

  </div>
</div>

       

        </Container>
    )
}



export default ProfilePage

// question mark in username