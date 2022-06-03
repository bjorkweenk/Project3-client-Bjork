//import { Row, Col } from "react-bootstrap"
import {useState, useEffect} from 'react'
//import FriendsCard from "../FriendsCard/FriendsCard"
import Loader from "../../../../components/Loader/Loader"
import FriendsService from "./../../../../services/friends.service.js"

const SearchFriends= ({ user }) => {

    const [searchFriendData, setSearchFriendData] = useState("");

    const handleSearch = (e) => {
       let value = e.target.value;

       FriendsService
       .searchNewFriends(value)
       .then(() => {
        setSearchFriendData(value);
       })
    }

    return (
        user.length
            ?
        <div className="input-group">
            <form onSubmit={handleSearch}>
            <div className="form-outline">
                <input type="search" id="form1" className="form-control" />
                <label className="form-label" for="form1">Search</label>
            </div>
        <button type="submit" className="btn btn-primary">
            <i className="fas fa-search"></i>
        </button>
        </form>
        </div>
            :
            <Loader />
    )
}

export default SearchFriends;


