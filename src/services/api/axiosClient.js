import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://fakestoreapi.com",
    timout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;
