import api from "../configs/api";

const sendOtp = async ( mobile ) => {

    try {

        const res = await api.post( "auth/send-otp", { mobile } )
        return { res };
        
    } catch (err) {

        return { err };
        
    }

}

export { sendOtp };