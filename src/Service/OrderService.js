import axios from "axios";
 

const ITEMS_TYPES_API_URL = 'http://localhost:8080/admin/viewAll';
const ITEMS_TYPES_BY_SERIAL_API_URL = 'http://localhost:8080/item/view/serial';

class ItemService {
    getUserCurrentOrders(){
        // return axios.get(ITEMS_TYPES_API_URL);
        return axios.get(`http://localhost:8080/customer/orders/{user_id}`); 
            // params: {
            //     user_id: 4
            // }
        // })
    }

}

export default new ItemService();