import { useQuery } from "@tanstack/react-query";

import { getCategory } from "src/services/admin";


export default function AddPost() {

    const { data } = useQuery( ["get-categories"], getCategory );
    console.log(data);

    const addHandler = event => {

        event.preventDefault();
        console.log("sent");

    }

    return <form onChange={ changeHandler } >

        <h3> افزودن آگهی </h3>

        <label htmlFor="title"> عنوان آگهی </label>
        <input type="text" name="title" id="title" />

        <label htmlFor="content"> توضیحات </label>
        <textarea name="content" id="content" />

        <label htmlFor="amount"> قیمت </label>
        <input type="text" name="amount" id="amount" />

        <label htmlFor="city"> شهر </label>
        <input type="text" name="city" id="city" />

        <label htmlFor="category"> دسته بندی </label>
        <select name="category" id="category" >

            { data?.data.map( i => <option key={ i._id } value={ i._id } > { i.name } </option> ) }

        </select>

        <label htmlFor="images"> عکس </label>
        <input type="file" name="images" id="images" />

        <button onClick={ addHandler } > ایجاد </button>

    </form>

}