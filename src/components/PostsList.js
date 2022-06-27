import PostListItem from "./PostListItem";

const PostsList = ({onDelete, values}) => {

    return <ul>
        {values.map(p => <PostListItem key={p.id} onDelete={onDelete} post={p}/>)}
    </ul>
}

export default PostsList;