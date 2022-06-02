//import axios from "axios"
//import { useContext } from "react"
import { Container } from "react-bootstrap"
import Favourites from "./../../../components/Favourites/Favourites"
//import { AuthContext } from "../../../context/auth.context
import "./Profile.css"

const ProfilePage = ({ username, userImg, favoriteStores, storeImage }) => {
    return (
        <Container>
            <h1> User {username}</h1> 
            <img src={userImg} alt="picture user"></img>
            <button> edit</button>
    
            <Favourites likes={favoriteStores}/>
            <h4> Title </h4>

       

        </Container>
    )
}

<div class="container">
  <div class="row">
    <div class="col-sm" className="ContainerPicture">
      YES
    </div>
    <div class="col-sm" className="ContainerPicture">
      One of three columns
    </div>
    <div class="col-sm" className="ContainerPicture">
      One of three columns
    </div>
  </div>
</div>

export default ProfilePage

// question mark in username