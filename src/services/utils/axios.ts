import { logRequestedUrl } from "@/helpers/utils";
import _axios from "axios";

const headers = { "Content-Type": "application/json" };

const axios = _axios.create({
    headers,
    baseURL: "",
});

axios.interceptors.request.use(
    function (config) {
        logRequestedUrl(config);
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axios;
