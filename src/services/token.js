import api from "configs/api";
import { getCookie } from "utils/cookie";

const  getNewTokens = async () => {

    const refreshToken = getCookie("refreshToken");
    if ( !refreshToken ) return;

    try {

        const res = await api.post( "auth/check-refresh-token", {refreshToken} );
        return res;
        
    } catch ( err ) {

        return err;
        
    }

};

export { getNewTokens };