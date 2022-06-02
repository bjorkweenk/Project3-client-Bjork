import { Row, Col } from "react-bootstrap"
import {useState, useEffect} from 'react'
import FriendsCard from "../FriendsCard/FriendsCard"
import Loader from "../../../../components/Loader/Loader"
import FriendsService from "./../../../../services/friends.service.js"


const Friends= () => {

    const [friends, setFriends] = useState(null);

    useEffect(() => {
        FriendsService
        .getAllFriends()
        .then((apiFriends) => setFriends(apiFriends))
    }, [])

    return (
        friends
            ?
            <Row>
                {
                    friends.map(friend => {
                        return (
                            <Col md={{ span: 4 }} key={friend._id}>
                                <FriendsCard friend = {friend} />
                            </Col>
                        )
                    })
                }
            </Row>
            :
            <Loader />
    )
}

export default Friends





