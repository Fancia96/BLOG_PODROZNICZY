import {useSelector, useDispatch} from "react-redux";

import {Link} from "react-router-dom";
import {FiTrash} from "react-icons/fi";
import {deletePost, selectAll} from "../store/reducer";

function Posts(){

    const posts = useSelector(selectAll());
    const dispatch = useDispatch();


    const removePost = (post) => {
        dispatch(deletePost(post));
    }

    console.log(JSON.stringify(posts));

    return(
        <>
            <div>Posts list</div>
            <ul>
                {posts.map(p => <li key={p.id}><Link to={`/post/${p.id}`}>{p.title}</Link>
                    <button className={"rounded-full ml-2 px-2"} onClick={ () => removePost(p)}><FiTrash/></button>
                </li>)}
            </ul>
        </>
    );
}

export default Posts;