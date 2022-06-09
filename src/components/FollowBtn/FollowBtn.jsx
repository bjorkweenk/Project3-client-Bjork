import "./FollowBtn.css"
import { Form } from "react-bootstrap";
import React, { useContext, useState, useEffect } from "react";
import FriendService from "./../../services/friends.service";


export default function FollowBtn({ friend, addFriends, setFollowing, search, setSearch, deleteSearch, deleteFriends }) {
  const [isFollowing, setIsFollowing] = useState(null);

  useEffect(() => {
    FriendService.checkIfFollowing(friend._id)
      .then((response) => {
        if (response.data === false) setIsFollowing(false);
        else setIsFollowing(true);
      })
      .catch((error) => error);
  }, []);

  const handleFollow = (e) => {
    e.preventDefault();

    FriendService.followFriend(friend._id)
      .then(() => {
        setIsFollowing(true);
        setFollowing(true);
        addFriends(friend);
        setSearch("");
        deleteSearch();
      })
      .catch((error) => console.log(error));
  };

  const handleUnfollow = (e) => {
    e.preventDefault();

    FriendService.unfollowFriend(friend._id)
      .then(() => {
        setIsFollowing(false);
        setFollowing(null);
        deleteFriends(friend._id);
      })

      .catch((error) => console.log(error));
  };

  return (
    <>
      {isFollowing ? (
        <Form onSubmit={handleUnfollow}>
          <button className="friendsBtn">
           Unfollow
          </button>
        </Form>
      ) : (
        <Form onSubmit={handleFollow}>
          <button className="friendsBtn">
            Follow 
          </button>
        </Form>
      )}
    </>
  );
}
