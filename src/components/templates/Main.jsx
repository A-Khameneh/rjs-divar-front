import { sp } from "src/utils/numbers";


export default function Main({ posts }) {

    const baseURL = import.meta.env.VITE_BASE_URL;

    return <div>

        {

            posts?.data?.posts?.map( post => (

                <div key={ post._id } >

                    <div>

                        <p> { post?.options?.title } </p>
                        <div>

                            <p> { sp( post?.amount ) } تومان </p>
                            <span> { post?.options?.city } </span>

                        </div>

                    </div>

                    <img src={ `${ baseURL }${ post.images[0] }` } />

                </div>

            ) )

        }

    </div>

}