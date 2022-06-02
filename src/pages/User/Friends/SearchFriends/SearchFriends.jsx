import React from 'react';
import { Row, Col } from "react-bootstrap"
import {useState, useEffect} from 'react'
import FriendsCard from "../FriendsCard/FriendsCard"
import Loader from "../../../../components/Loader/Loader"
import FriendsService from "./../../../../services/friends.service.js"

const SearchFriends= ({ user }) => {

    const [searchFriendData, setSearchFriendData] = useState("");

    const handleSearch = (e) => {
       let value = e.target.value;
       setSearchFriendData(value);
    }

    return (
        user.length
            ?
            <Row>
                {
                    user.map(friend => {
                        return (
                            <Col md={{ span: 4 }} key={friend._id}>
                                <FriendsCard {...friend} />
                            </Col>
                        )
                    })
                }
            </Row>
            :
            <Loader />
    )
}

export default SearchFriends