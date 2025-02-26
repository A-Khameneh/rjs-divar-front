import { useQuery } from "@tanstack/react-query";
import { getCategory } from "src/services/admin";


export default function SideBar() {

    const { data } = useQuery( ["get-categories"], getCategory );
    console.log(data);

    return <div>

        <h4> دسته ها </h4>

        <ul>

            { data?.data?.map( category => (

                <li key={ category._id } >

                    <img src={`${ category?.icon }.svg`} />
                    <p> { category.name } </p>

                </li>

            ) ) }

        </ul>

    </div>

}