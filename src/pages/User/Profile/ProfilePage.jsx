import axios from "axios"
import { useContext } from "react"
import { Container } from "react-bootstrap"
import { AuthContext } from "../../../context/auth.context"

const ProfilePage = () => {
    return (
        <Container>

            <h1> User {user?.username}</h1>
            <button> edit</button>
    
            <Favorites likes={user.likes.map()}/>
            <h4> Title </h4>
           <img src={storeImg}></img> 
        </Container>
    )
}

export default ProfilePage