import { sendOtp } from "services/auth";

import styles from "./SendOtpForm.module.css";

export default function SendOtpForm({ mobile, setMobile, setStep }) {

    const submitHandler = async event => {

        event.preventDefault();
        if ( mobile.length !== 11 ) return;

        const { res, err } = await sendOtp( mobile );

        if ( res ) setStep(2);

        if ( err ) console.log( err.response.data.message );
 
    }

    return (

        <form onSubmit={ submitHandler } className={ styles.form } >

            <p> ورود به حساب کاربری </p>

            <span> برای استفاده از امکانات دیوار ، لطفا شماره موبایل خود را وارد کنید. کد تایید به این شماره پیامک می شود. </span>

            <label htmlFor="input" > شماره موبایل خود را وارد کنید. </label>
            <input type="text" id="input" placeholder="شماره موبایل" value={ mobile } onChange={ e => setMobile( e.target.value ) } />
            
            <button type="submit" > ارسال کد تایید </button>

        </form>

    )

}