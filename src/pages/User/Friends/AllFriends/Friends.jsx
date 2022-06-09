import React,{useState, useEffect} from 'react'
import FriendsCard from "../../../../components/FriendsCard/FriendsCard"
import Loader from "../../../../components/Loader/Loader"
import FriendsService from "./../../../../services/friends.service.js"
import SearchFriends from "../../../../components/SearchFriends/SearchFriends"


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


    return (
        <>
        <div>
            <SearchFriends search={search} setSearch={setSearch}/>
        </div>
        <div>
        {friends
            ?
            <div>
                {
                    friends.map(friend => {
                        return (
                            <div key={friend._id}>
                                <FriendsCard search={search} setSearch={setSearch} friend = {friend} addFriends={addFriends} setFollowing= {setFollowing}/>
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







