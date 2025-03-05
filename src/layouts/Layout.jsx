import Header from "layouts/Header";
import Footer from "layouts/Footer";

export default function Layout({ children }) {

    return (

        <>

            <Header />

                <div className="min-h-screen" >

                    {children}

                </div>

            <Footer />

        </>
    )

}