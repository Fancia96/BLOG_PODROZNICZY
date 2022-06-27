import {useSelector, useDispatch} from "react-redux";

import {deletePost, selectAll} from "../store/reducer";
import PostsList from "../components/PostsList";

function Posts(){

    const posts = useSelector(selectAll());
    const dispatch = useDispatch();


    const removePost = (post) => {
        dispatch(deletePost(post));
    }

    //console.log(JSON.stringify(posts));

    return(
        <>
            <div>Posts list</div>
            <PostsList onDelete={removePost} values={posts}/>
        </>
    );
}

export default Posts;