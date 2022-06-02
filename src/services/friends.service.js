import axios from 'axios';

class FriendsService {
    constructor (){
        this.app = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/friends` })
    }

    followFriend = (friendId) =>{
        return this.app.post(`/api/user/follow/${friendId}`)
    }

    unfollowFriend = (friendId) =>{
        return this.app.post (`/api/user/unfollow/${friendId}`)
    }
    
    checkIfFollowing = (friendId) =>{
        return this.app.get(`/api/user/checkfollowing/${friendId}`)
    }

    searchNewFriends = (user) => {
        return this.app.get(`/api/search/user`, user)
    }

    getAllFriends = () => {
        return this.app.get('/api/user/friends')
    }
}

const FriendService = new FriendsService();

export default FriendService;