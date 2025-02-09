import { checkOtp } from "services/auth";
import { setCookie } from "utils/cookie";


export default function CheckOtpForm({ code, setCode, setStep, mobile }) {

    const submitHandler = async (e) => {

        e.preventDefault();
        if ( code.length !== 5 ) return;

        const { res, err } = await checkOtp( mobile, code )
        if ( res ) {

            console.log(res.data);
            setCookie( res.data );

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