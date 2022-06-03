import axios from 'axios';

class StoreService {
    constructor (){
        this.app = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/` })
    }

    // this is to get the details of one store

    getStoreDetails = (storeId) => {
        return this.app.get(`/api/store-details/${storeId}`)
    }

    // this is to get the stores the user liked in order to render in the user profile
    getStoresLiked = (storeId) => {
        return this.app.get(`/api/store/${storeId}`)
    
    }

    // get the stores filtered by friends likes
    getStoresFriends = () => {
        return this.app.get('/api/friends-store')
    }

    // get the stores filtered by cuisine
    getStoresByCuisine =() =>{
        return this.app.get('/api/cuisine/:type')
    }
}

const StoresService = new StoreService();

export default StoresService;