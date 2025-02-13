import axios from "axios";
import { getCookie } from "utils/cookie";

const api = axios.create({

    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {

        "Content-Type": "application/json",

    }

})

axios.interceptors.request.use( (req) => {

    const accessToken = getCookie("accessToken");
    if ( accessToken ) {

        req.headers["Authorization"] = `bearer ${accessToken}`

    }

    return req;

}, err => {

    return Promise.reject(err);

} )

export default api;