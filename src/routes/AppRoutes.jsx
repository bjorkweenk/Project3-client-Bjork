import React from "react";
import { Routes, Route } from "react-router-dom";
import StoreDetails from "../pages/Stores/StoreDetails/StoreDetails";
import Friends from "../pages/User/Friends/AllFriends/Friends";
import Splash from "../components/Splash/Splash";
import Login from "../components/LoginForm/Login";
import ProfilePage from "../pages/User/Profile/ProfilePage";
import ProfileEdit from "../pages/User/ProfileEdit/ProfileEdit";
import Signup from "../components/SignupForm/Signup";
//import PrivateRoute from "./PrivateRoute"


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/store-details/:id" element={<StoreDetails />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route path="/profile/:id" element={<ProfilePage />}/>
        <Route path="/profile-edit/:id" element={<ProfileEdit />}>
      </Route>

      <Route path="*" element={<h1>Oops!! There was en error</h1>} />
    </Routes>
  );
};

export default AppRoutes;
