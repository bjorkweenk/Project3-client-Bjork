
//const User = require("./../models/user.model");
import FriendsCardStyle from "./FriendsCardStyle.css";
import { Card, Button, Form } from "react-bootstrap";
import {Link } from 'react-router-dom'
import { React, useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../../context/auth.context.js";
import FriendService from "../../../../services/friends.service";

const FriendsCard = ({ username, userImg }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    FriendService.followFriend(user);
    setIsFollowing(false);
  }, []);

  const handleFollow = (e) => {
    e.preventDefault();

    FriendService.followFriend(user)
      .then(() => setIsFollowing(true))
      .catch((err) => console.log("Unable to stablish the relationship", err))
  };

  const handleUnfollow = (e) => {
    e.preventDefault();

    FriendService.followFriend(user)
      .then(() => setIsFollowing(false))
      .catch((err) => console.log("Unable to break the relationship", err));
  };

  const { user } = useContext(AuthContext)
   
  return (
    <Card className="friendsCard">
      <Card.Img variant="top" src={userImg} />
      <Card.Body>
        <Card.Title>{username}</Card.Title>
        <div className="d-grid gap-2">
          <Link to={`/profile/${user.id}`} className="btn btn-dark"></Link>
          {isFollowing }?{" "}
          {
            <Form onSubmit={handleUnfollow}>
              <Button variant="dark" type="submit" className="friendsBtn">
                Unfollow
              </Button>
            </Form>
          }{" "}
          :{" "}
          {
            <Form onSubmit={handleFollow}>
              <Button variant="dark" type="submit" className="friendsBtn">
                Follow
              </Button>
            </Form>
          }
        </div>
      </Card.Body>
    </Card>
  );
};

export default FriendsCard;
