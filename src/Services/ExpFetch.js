
const REST_API_GET_URL = 'http://localhost:8080/api/v1';

class ExpFetchService {
    
    getExps() {
        return fetch(REST_API_GET_URL,{
            method : 'get',
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json());
    }
}

export default new ExpFetchService();