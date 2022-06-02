//import axios from "axios"
//import { useContext } from "react"
import { Container } from "react-bootstrap"
import Favourites from "./../../../components/Favourites/Favourites"
//import { AuthContext } from "../../../context/auth.context"

const ProfilePage = ({ username, userImg, favoriteStores }) => {
    return (
        <Container>
            <h1> User {username}</h1> 
            <img src={userImg} alt=""></img>
            <button> edit</button>
    
            <Favourites likes={favoriteStores}/>
            <h4> Title </h4>
           <img src={userImg} alt=""></img>


        </Container>
    )
}

export default ProfilePage

// question mark in username