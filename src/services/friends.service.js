import axios from 'axios';

class FriendsService {
    constructor (){
        this.app = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/friends` })
    }

    followFriend = (friend_id) =>{
        return this.app.post(`/api/user/follow/`, friend_id)
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