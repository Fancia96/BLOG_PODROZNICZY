import {Link} from "react-router-dom";
import {FiTrash} from "react-icons/fi";



const PostListItem = ({onDelete, post}) => {

    return <li className={"mb-5"}><Link to={`/post/${post.id}`}>{post.date} | {post.title}<br/> <div className={"text-xs max-w-screen-sm mx-auto"}>{post.content.substring(0, 200)} </div> </Link>
        <button className={"rounded-full ml-2 px-2"} onClick={ () => onDelete(post)}><FiTrash/></button>

    </li>
}

export default PostListItem;