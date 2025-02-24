import { useQuery } from "@tanstack/react-query"
import { getPosts } from "services/user"
import Loader from "../modules/Loader";
import { sp } from "utils/numbers";


export default function PostList() {

    const { data, isLoading } = useQuery( ["my-post-list"], getPosts )
    const baseURL = import.meta.env.VITE_BASE_URL;

    console.log(data);

    return <div>

        { 
            isLoading ? <Loader /> : (
            
                <>

                    <h3> آگهی های شما </h3>

                    {

                        data.data.posts.map( post => (

                            <div key={ post._id } >

                                <img src={ `${ baseURL }${ post.images[0] }` } />

                                <div>

                                    <p> { post?.options?.title ?? "بدون عنوان" } </p>
                                    <span> { post?.options?.content ?? "بدون توضیح" } </span>

                                </div>

                                <div>

                                    <p> { new Date( post?.createdAt ).toLocaleDateString("fa-IR") } </p>
                                    <span> { sp( post?.amount ) } تومان </span>

                                </div>

                            </div>

                        ) )  
                    }
        
                </>
            ) 
        }

    </div>

}