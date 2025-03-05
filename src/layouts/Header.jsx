import { Link } from "react-router-dom";

export default function Header() {

    return <header className="flex justify-between items-center border-b-2 border-gray-300 py-2.5 mb-5" > 

        <div className="flex items-center" >

            <Link to="/" > <img src="divar.svg" alt="divar" className="w-12 ml-10" /> </Link>
            <span className="flex items-center text-gray-500 h-12" > 

                <img src="location.svg" alt="location" /> 
                <p className="mr-1.5 text-sm" >تهران</p>

            </span>

        </div>

        <div className="flex items-center space-x-4" >

            <Link to="/auth" >

                <span className="flex items-center" >

                    <img src="profile.svg" alt="profile" />
                    <p className="mr-1.5" > دیوار من </p>

                </span>

            </Link>

            <Link to="/dashboard" className="bg-primary text-white h-10 w-20 rounded-md flex items-center justify-center text-center ml-10" > ثبت آگهی </Link>

        </div>

    </header>

}