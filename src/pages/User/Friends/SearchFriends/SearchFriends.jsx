import React from 'react';
import { Row, Col } from "react-bootstrap"
import {useState, useEffect, useContext} from 'react'
import FriendsCard from "../FriendsCard/FriendsCard"
import Loader from "../../../../components/Loader/Loader"
import { AuthContext } from '../../../../context/auth.context'
import FriendsService from "./../../../../services/friends.service.js"

const SearchFriends= () => {
    const {user} = useContext(AuthContext)
    const [friendsData, setFriendsData] = useState(null);
    const [friends, setFriends] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        FriendsService
        .searchNewFriends()
        .then((users) => {
            setFriendsData(users)
        })
    }, [])

    const handleSearch = (e) => {
        let value = e.target.value;
        setSearch(value);

        if (value === "") {
            setFriends(null);
          } else {
            const newFriendsSearch = friendsData.filter((friend) =>
              friend.username.toLowerCase().includes(search.toLowerCase())
            );
            setFriends(newFriendsSearch);
        };

       setFriends(value);
    }

    return (

        <div className="input-group">
            <form >
            <div className="form-outline">
                <input onChange={handleSearch} value={search} type="search" id="form1" className="form-control" />
                <label className="form-label" for="form1"></label>
            </div>
        <button type="submit" className="btn btn-primary"> Search
            <i className="fas fa-search"></i>
        </button>
        </form>
        
        {friendsData ?
          
            friends.map(friend => {
                return (
                            <Col md={{ span: 4 }} key={friend._id}>
                                <FriendsCard friend = {friend} />
                            </Col>
                        )
            })
           :
            <Loader />
        }
        </div>
    )
}

export default SearchFriends;


