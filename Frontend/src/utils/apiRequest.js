import axios from "axios";

const API = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_PATH}/api/v1/`,
});

const getRequest = async (route, params) => {
    try {
        const { data } = await API.get(route, { params });
        return data;
    } catch (error) {
        return handleError(error);
    }
};

// POST request
const postRequest = async (route, payload) => {
    try {
        const { data } = await API.post(route, payload);
        return data;
    } catch (error) {
        return handleError(error);
    }
};

const putRequest = async (route, payload) => {
    try {
        const { data } = await API.put(route, payload);
        return data;
    } catch (error) {
        return handleError(error);
    }
};

const deleteRequest = async (route) => {
    try {
        const { data } = await API.delete(route);
        return data;
    } catch (error) {
        return handleError(error);
    }
};

const handleError = (error) => {

    const obj = {
        success: false,
        message: error.response?.data?.message || "Server Error",
        errors: error.response?.data?.errors || [],
    }

    return obj
};

export {
    getRequest,
    postRequest,
    putRequest,
    deleteRequest,
};