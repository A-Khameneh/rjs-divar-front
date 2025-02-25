import { useQuery } from "@tanstack/react-query"
import { getPosts } from "services/user"


export default function PostList() {

    const { data, isLoading } = useQuery( ["my-post-list"], getPosts )

    console.log(data);

    return <div>

        Post List

    </div>

}