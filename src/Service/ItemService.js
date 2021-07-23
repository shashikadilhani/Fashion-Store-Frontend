import axios from "axios";
 

const ITEMS_TYPES_API_URL = 'http://localhost:8081/cusotmer/viewAll';
const ITEMS_WOMEN_TYPES_API_URL = 'http://localhost:8081/item/viewAllTypes';

class ItemService {
    getItemTypes(){
        return axios.get(ITEMS_TYPES_API_URL);
    }

    getAllWomenItemTypes(){
        return axios.get(ITEMS_WOMEN_TYPES_API_URL);
    }
}

export default new ItemService();