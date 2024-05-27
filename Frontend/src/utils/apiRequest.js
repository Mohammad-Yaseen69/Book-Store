import axios from "axios";

const API = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_PATH}/api/v1/`,
});

const getRequest = async (route, params) => {
    try {
        const data = await API.get(route)
        return data.data
    } catch (error) {
        return error;
    }
}

export {
    getRequest
}