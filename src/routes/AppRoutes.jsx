import { Routes, Route } from "react-router-dom"
import StoreDetails from "../pages/Stores/StoreDetails/StoreDetails"
import Friends from '../pages/User/Friends/AllFriends/Friends'
import Splash from "../components/Splash/Splash"
import Login from "../components/LoginForm/Login"
import ProfilePage from "../pages/User/Profile/ProfilePage"
import Signup from "../components/SignupForm/Signup"
//import PrivateRoute from "./PrivateRoute"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/store-details/:id" element={<StoreDetails />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            <Route path="/profile/:id" element={<ProfilePage />}>
                <Route path="" element={<ProfilePage />} />
            </Route>


            <Route path="*" element={<h1>Esto es un 404, melón</h1>} />
        </Routes>
    )
}

export default AppRoutes