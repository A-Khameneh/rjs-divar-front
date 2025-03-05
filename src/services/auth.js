import api from "configs/api";

const sendOtp = async ( mobile ) => {

    try {

        const res = await api.post( "auth/send-otp", { mobile } )
        return { res };
        
    } catch (err) {

        return { err };
        
    }

}

const checkOtp = async ( mobile, code ) => {

    try {

        const res = await api.post( "auth/check-otp", { mobile, code } )
        return { res }
        
    } catch (err) {

        return { err }
        
    }

}

export { sendOtp, checkOtp };