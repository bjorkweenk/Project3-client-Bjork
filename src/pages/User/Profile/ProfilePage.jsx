//import { useContext } from "react"
import { useContext, useEffect } from "react"
import { Container } from "react-bootstrap"
//import Favourites from "./../../../components/Favourites/Favourites"
//import { AuthContext } from "../../../context/auth.context
import "./Profile.css"
import userService from "../../../services/user.service"
import {AuthContext} from "../../../context/auth.context"
import Loader from "../../../components/Loader/Loader"
import uploadService from "../../../services/upload.service"


const ProfilePage = () => {

    const { user, store} = useContext(AuthContext)

    useEffect(()=> userService.getOneUser())
    useEffect(() => uploadService.getUploadImage()) // bjork added 11.00

    return (
        <>
        {user ?
        <Container>
            <h1> Name {user.username}</h1> 
          <div class="borderUserPicture">  <img src={user.userImg} alt="picture user"></img> </div>
          <br></br>
            <a href="../ProfileEdit"><button> edit</button></a>
    


          {/* <Favourites likes={store.favoriteStores}/>  */}
            <h4> You're Favorites </h4>

 <div class="container">
  <div class="row">
  

    <br></br>
    <div className="ContainerPicture">
    <img src={store.storeImg} alt=" store image "></img>

    <br></br>
      Restaurant 2
    </div>

    <br></br>
    <div className="ContainerPicture">
    <img src={store.storeImg} alt=" store image "></img>
    <br></br>
      Restaurant 3
    </div>

    <br></br>
    <div className="ContainerPicture">
    <img src={store.storeImg} alt=" store image "></img>
    <br></br>
      Restaurant 2
    </div>

  </div>
</div>  

       

        </Container>
        :
        <Loader />}
        </>
    )
}



export default ProfilePage

// question mark in username