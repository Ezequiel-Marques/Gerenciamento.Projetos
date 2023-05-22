import axios from "axios";

const api = axios.create({
    withCredentials: true,
    validateStatus: (status) => status >= 200 && status < 500 && status !== 401,
});

api.interceptors.request.use((config) => {
    config.headers["Authorization"] = "Bearer " + localStorage.getItem("token");
    return config;
});

export default api;