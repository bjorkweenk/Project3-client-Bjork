import axios from 'axios';

class FriendsService {
    constructor (){
        this.app = axios.create({baseURL:})
    }

    saveFriend = friend =>{
        return this.app.post(`/friends`, friend)
    }
}

const FriendService = new FriendsService();

export default FriendService;