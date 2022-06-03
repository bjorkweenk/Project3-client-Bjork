//import { useContext } from "react"
import { useContext, useEffect, useState } from "react"
import { Container } from "react-bootstrap"
//import Favourites from "./../../../components/Favourites/Favourites"
//import { AuthContext } from "../../../context/auth.context
import "./Profile.css"
import userService from "../../../services/user.service"
import {AuthContext} from "../../../context/auth.context"
import Loader from "../../../components/Loader/Loader"
//import uploadService from "../../../services/upload.service"


const ProfilePage = () => {

    const {user} = useContext(AuthContext)
    const [profile, setProfile] = useState(null)

    useEffect(() => {
      if(user) {
        userService.getOneUser(user._id)
        .then(response => {
          setProfile(response.data)
        })
        .catch(err => console.log(err));
    }
    }, [user])
    /* useEffect(() => uploadService.getUploadImage()) // bjork added 11.00 */

    return (
        <>
        {profile ?
        <Container>
            <h1> {profile.username}</h1> 
         
         
          {/* <img src={user.userImg} alt="picture user" /> */}
          <img className="userImage" src={profile.userImg} alt={profile.userImg} />
          <br></br>
            <a href="/profile-edit/:id"><button> edit</button></a>
    


          {/* <Favourites likes={store.favoriteStores}/>  */}
          <h4> Your Favourites </h4>

          <div className="container">
            <div className="row">
            

              {/* <br></br>
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
              </div> */}

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