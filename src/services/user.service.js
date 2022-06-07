import axios from 'axios';

class UserService {
    constructor (){
        this.app = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}` })
    }

    getOneUser = (userId) => {
        return this.app.get(`/api/profile/${userId}`)
    }

    getAllUsers = () => {
        return this.app.get('/api/user')
    }

    saveUser = (userId, username, tagLine, email) => {
        console.log(userId)
        return this.app.post(`/api/user/profile/${userId}/edit`, {username: username, tagLine:tagLine, email:email})
       
    }
    
}

const userService = new UserService();

export default userService;