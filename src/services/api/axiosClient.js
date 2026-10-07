import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://dummyjson.com",
    timout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;
