import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { checkOtp } from "services/auth";
import { getProfile } from "services/user";
import { setCookie } from "utils/cookie";


export default function CheckOtpForm({ code, setCode, setStep, mobile }) {

    const { refetch } = useQuery( ["profile"], getProfile );

    const navigate = useNavigate();

    const submitHandler = async (e) => {

        e.preventDefault();
        if ( code.length !== 5 ) return;

        const { res, err } = await checkOtp( mobile, code )
        if ( res ) {

            setCookie( res.data );
            navigate("/");
            refetch();

        }

        if ( err ) {

            console.log(err.response.data.message);

        }

    }

    return (

        <form onSubmit={ submitHandler } >

            <p> تایید کد پیامکی </p>
            <span> کد پیامک شده به شماره { mobile } را وارد کنید. </span>

            <label htmlFor="input"> کد تایید را وارد کنید. </label>
            <input type="text" id="input" placeholder="کد تایید" value={ code } onChange={ e => setCode( e.target.value ) } />

            <button type="submit" > ورود </button>
            <button onClick={ () => setStep(1) } > تغییر شماره موبایل </button>

        </form>

    )

}