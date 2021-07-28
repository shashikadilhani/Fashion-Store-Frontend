import axios from "axios";
 

const ITEMS_TYPES_API_URL = 'http://localhost:8080/admin/viewAll';
const ITEMS_CATEGORY_TYPES_API_URL = 'http://localhost:8080/item/view/catogery/types';

class ItemService {
    getItemTypes(){
        return axios.get(ITEMS_TYPES_API_URL);
    }

    getAllCAtegofyItemTypes(){
    
        // return axios.get(ITEMS_TYPES_API_URL);
        return axios.get(`http://localhost:8080/item/view/catogery/types`, {  
            params: {
                cate: 'WOMEN'
            }
        })
    }
}

export default new ItemService();