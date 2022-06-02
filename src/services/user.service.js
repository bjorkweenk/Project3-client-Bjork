import axios from 'axios';

class UserService {
    constructor (){
        this.app = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/profile` })
    }

    getOneUser = (userId) => {
        return this.app.get(`/api/user/${userId}`)
    }

    getAllUsers = () => {
        return this.app.get('/api/user')
    }
}

const userService = new UserService();

export default userService;