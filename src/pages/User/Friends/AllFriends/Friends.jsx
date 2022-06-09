import React,{useState, useEffect} from 'react'
import FriendsCard from "../../../../components/FriendsCard/FriendsCard"
import Loader from "../../../../components/Loader/Loader"
import FriendsService from "./../../../../services/friends.service.js"
import SearchFriends from "../../../../components/SearchFriends/SearchFriends"
import "./Friends.css"


export default function Friends (){

    const [friends, setFriends] = useState(null);
    const [following, setFollowing] = useState (null)
    const [search, setSearch] = useState("");

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

    function deleteFriends(newFriend) {
        const newFriends = friends.filter(friend => friend._id !== newFriend)
        setFriends([...newFriends])
    }


    return (
        <>

        <div class="Friends">
            <SearchFriends search={search} setSearch={setSearch} addFriends={addFriends} setFollowing= {setFollowing} deleteFriends={deleteFriends}/>

        </div>
        <div>
        {friends
            ?
            <div className='friendsCardWrapper'>
                {
                    friends.map(friend => {
                        return (
                            {following} &&
                            <div key={friend._id}>
                                <FriendsCard search={search} setSearch={setSearch} friend = {friend} addFriends={addFriends} setFollowing= {setFollowing} deleteFriends={deleteFriends}/>
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







