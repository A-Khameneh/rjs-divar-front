import Header from "layouts/Header";
import Footer from "layouts/Footer";

import styles from "./Layout.module.css";

export default function Layout({ children }) {

    return (

        <>

            <Header />

                <div className={ styles.main } >

                    {children}

                </div>

            <Footer />

        </>
    )

}