
//const User = require("./../models/user.model");
import FriendsCardStyle from "./FriendsCardStyle.css";
import { Card, Button, Form } from "react-bootstrap";
import {Link } from 'react-router-dom'
import { React, useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../../context/auth.context.js";
import FriendService from "../../../../services/friends.service";
import FollowBtn from "../../../../components/FollowBtn/FollowBtn";

const FriendsCard = ({ friend }) => {


 /*  useEffect(() => {
    FriendService.followFriend(user);
    setIsFollowing(false);
  }, []); */

 

  const { user } = useContext(AuthContext)
   
  return (
    <Card className="friendsCard">
      <Card.Img variant="top" src={friend.userImg} />
      <Card.Body>
        <Card.Title>{friend.username}</Card.Title>
        <div className="d-grid gap-2">
          <Link to={`/profile/${friend._id}`} className="btn btn-dark"></Link>
          <FollowBtn friend={friend}/>
          
        </div>
      </Card.Body>
    </Card>
  );
};

export default FriendsCard;
