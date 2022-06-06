import axios from 'axios';

class StoreService {
    constructor (){
        this.app = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}` })
    }

    // this is to get the details of one store
    getStoreDetails = (id) => {
        return this.app.get(`/api/store/store-details/${id}`)
    }

    // this is to get the stores the user liked in order to render in the user profile
    /* getStoresLiked = (storeId) => {
        return this.app.get(`/api/store/store/${storeId}`)
    
    } */

    // get the stores filtered by friends likes
    getStoresFriends = () => {
        return this.app.get('/api/store/friends-store')
    }

    getAllCuisines = (type) => {
        return this.app.get(`/api/store/cuisine/${type}`)
    }
 
    // get the stores filtered by cuisine
    getStoresByCuisine =() =>{
        return this.app.get('/api/store/cuisine-results')
    }
}

const StoresService = new StoreService();

export default StoresService;