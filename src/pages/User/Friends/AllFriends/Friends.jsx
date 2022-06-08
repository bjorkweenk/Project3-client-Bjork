import React from 'react';
import {useState, useEffect} from 'react'
import FriendsCard from "../../../../components/FriendsCard/FriendsCard"
import Loader from "../../../../components/Loader/Loader"
import FriendsService from "./../../../../services/friends.service.js"
import SearchFriends from "../../../../components/SearchFriends/SearchFriends"
import "./Friends.css"


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
        <div class="Friends">
            <SearchFriends />
        </div>
        <div>
        {friends
            ?
            <div className='friendsCardWrapper'>
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
    <br></br>
<a href="/home" class="button9"> <img src="https://flyclipart.com/thumb2/arrow-to-the-left-arrow-png-icon-free-download-510843.png" width={15} height={15}/> </a>
</div>
            </div>
           
            </>
    )
}

export default Friends





