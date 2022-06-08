import React from 'react';
import {useState, useEffect} from 'react'
import FriendsCard from "../../../../components/FriendsCard/FriendsCard"
import Loader from "../../../../components/Loader/Loader"
import FriendsService from "./../../../../services/friends.service.js"
import SearchFriends from "../../../../components/SearchFriends/SearchFriends"


const Friends= () => {

    const [friends, setFriends] = useState(null);
    const [following, setFollowing] = useState (null)

    useEffect(() => {
        FriendsService
        .getAllFriends()
        .then((apiFriends) => {
            console.log(apiFriends.data)
            setFriends(apiFriends.data)
        })
    }, [])

    useEffect(() => {
        FriendsService
        .getAllFriends()
        .then((apiFriends) => {
            console.log(apiFriends.data)
            setFriends(apiFriends.data)
        })
    }, [following])


    function addFriends(newFriend) {
        setFriends([...friends, newFriend])
    }


    return (
        <>
        <div>
            <SearchFriends />
        </div>
        <div>
        {friends
            ?
            <div>
                {
                    friends.map(friend => {
                        return (
                            <div key={friend._id}>
                                <FriendsCard friend = {friend} addFriends={addFriends} setFollowing= {setFollowing}/>
                            </div>
                        )
                    })
                }             
            </div>
            :
            <Loader />}
<div>
<a href="/home"> <button> go back  </button></a>
</div>
            </div>
           
            </>
    )
}

export default Friends





