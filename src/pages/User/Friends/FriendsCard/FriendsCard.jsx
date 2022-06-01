//const User = require("./../models/user.model");
import FriendsCard from './Friends.css'
import { Card } from "react-bootstrap"
import { Link, Button } from 'react-router-dom'
import { React, useContext, useState } from 'react'
import { AuthContext } from '../../../context/auth.context'
import FriendService from '../../../../services/friends.service'


const FriendsCard = ({ username, imageUrl}) => {

    const [friends, setFriends] = useState(false);

    const handleSubmit= (e) => {
        e.preventDefault();

        FriendService
        .then(() => setFriends(true))
        .catch ((err) => console.log("Unable to stablish the relationship", err))
        
    }

/*     const { user } = useContext(AuthContext)
 */
    return (
        <Card className="friendsCard">
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{username}</Card.Title>
                <div className="d-grid gap-2">
                    <Link to={`/profile/${_id}`} className="btn btn-dark"></Link>
                    <Form onSubmit = {handleFriends}>
                    <Button variant="dark" type="submit" className="friendsBtn">Follow</Button>
                    </Form>
                </div>
            </Card.Body>
        </Card>
    )
}

export default FriendsCard;