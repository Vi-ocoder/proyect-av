import axios from "axios";

const httpClient = axios.create({
    timeout: 3000,
    headers: {
        "content-Type": "aplication/json"
    }

});

export default httpClient;