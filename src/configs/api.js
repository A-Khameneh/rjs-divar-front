import axios from "axios";
import { getNewTokens } from "services/token";
import { getCookie, setCookie } from "utils/cookie";

const api = axios.create({

    withCredentials: true,

    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {

        "Content-Type": "application/json",

    }

})

api.interceptors.request.use( (req) => {

    const accessToken = getCookie("accessToken");

    if ( accessToken ) {

        req.headers["Authorization"] = `bearer ${accessToken}`

    }

    return req;

    }, err => {

        return Promise.reject(err);

    }

)

api.interceptors.response.use( res => {

        return res

    }, async err => {

        const originalReq = err.config;

        if ( err.response.status === 401 && !originalReq._retry ) {

            originalReq._retry = true;

            const res = await getNewTokens();

            if ( !res?.data ) return;

            setCookie( res.data );
            
            return api( originalReq )

        }

    }

)

export default api;