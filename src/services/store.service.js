import axios from 'axios';

class StoreService {
    constructor (){
        this.app = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/` })
    }

    getOneStore = (storeId) => {
        return this.app.get(`/api/store/${storeId}`, `/api/storeImg/${Img}`)
    
    }

    getAllUstores = () => {
        return this.app.get('/api/store')
    }
}

const StoreService = new StoreService();

export default StoreService;